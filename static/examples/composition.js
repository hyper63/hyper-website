import { connect } from "hyper-connect";
import { cuid } from "cuid";
const hyper = connect(process.env.HYPER);

export async function addMovie(movie) {
  movie = { _id: `movie-${cuid()}`, ...movie, type: "movie" };
  await hyper.data.add(movie);
  await hyper.cache.add(movie._id, movie, "1h");
  await hyper.search.add(movie._id, movie);
  await hyper.queue.enqueue({ type: "MOVIE_ADDED", movieId: movie._id });
  return movie;
}

export async function getMovie(movieId) {
  let movie = await hyper.cache.get(movieId);
  if (movie.status === 404) {
    movie = await hyper.data.get(movieId);
    await hyper.cache.add(movie._id, movie, "1h");
  }
  return movie;
}

export async function searchMovies(criteria) {
  const { matches: movies } = await hyper.search.query(criteria);
  await Promise.all(
    movies.map((movie) => hyper.queue.enqueue({ type: "MOVIE_SEARCH_MATCH", movieId: movie._id }))
  );
  return movies;
}

export async function findPopularMovies() {
  const { movies: trending } = await hyper.cache.get("trending-movies");
  return trending;
}

// Your Queue Target Worker
export async function handleMovieJobs(payload) {
  const movie = await hyper.data.get(payload.movieId);
  switch (payload.type) {
    case "MOVIE_ADDED":
      await notifyGenreSubscribers(movie.genre, movie);
      await updateMovieStats(movie);
      break;
    case "MOVIE_SEARCH_MATCH":
      let { count = 0 } = await hyper.cache.get(`search-hits-${movie._id}`);
      await hyper.cache.set(`search-hits-${movie._id}`, { count: count++, _id: movie._id }, "1h");
      if (count > 10) {
        await updateTrendingMovies(movie);
      }
      break;
  }
}
