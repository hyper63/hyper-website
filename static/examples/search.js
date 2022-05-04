import { connect } from "hyper-connect";
const hyper = connect(process.env.HYPER);

export async function indexMovie(movie) {
  await hyper.search.add(movie._id, movie);
}

export async function searchMovies(criteria) {
  const { matches: movies } = await hyper.search.query(criteria, {
    fields: ["title", "description", "cast"],
  });
  return movies;
}

export async function searchMoviesInGenre(criteria, genre) {
  const { matches: movies } = await hyper.search.query(criteria, {
    fields: ["title", "description", "cast"],
    filter: { genre },
  });
  return movies;
}
