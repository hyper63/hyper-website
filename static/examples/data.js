import { connect } from "hyper-connect";
import { cuid } from "cuid";
const hyper = connect(process.env.HYPER);

export async function addMovies(movies) {
  movies = movies.map((movie) => ({
    _id: `movie-${cuid()}`,
    ...movie,
    type: "movie",
  }));
  await hyper.data.bulk(movies);
  return movies;
}

export async function addMovie(movie) {
  movie = { _id: `movie-${cuid()}`, ...movie, type: "movie" };
  await hyper.data.add(movie);
  return movie;
}

export async function findMovies(rating) {
  const { docs: movies } = await hyper.data.query(
    {
      rating: {
        $gte: rating,
      },
    },
    { useIndex: "custom-idx" }
  );
  return movies;
}
