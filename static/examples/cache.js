import { connect } from "hyper-connect";
const hyper = connect(process.env.HYPER);

export async function computeMovieSuggestions(userId) {
  const user = await hyper.data.get(userId);
  const suggestions = await expensiveComputation(user.preferences);
  await hyper.cache.add(`${userId}-movie-suggestions`, { suggestions }, "4h");
  return suggestions;
}

export async function findSuggestedMovies(userId) {
  const res = await hyper.cache.get(`${userId}-movie-suggestions`);
  return res.status === 404 ? computeMovieSuggestions(userId) : res;
}

export async function findMoviesWithGenre(genre) {
  const { docs: movies } = await hyper.cache.query(`movie-${genre}-*`);
  return movies;
}
