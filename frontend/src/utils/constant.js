export const API_END_POINT = "https://server-moviebuzz-yb.vercel.app";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWUzZjUxMmE2MzAzNTcxMzkyOTBiNmI4MDMyZGZmYyIsInN1YiI6IjY1ZmQzZmE0MDQ3MzNmMDE2NGU4NjY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5a9ySJLy8Fgl7kxJtvVM23UqMVlMwTp2BAVkcmf8nPU",
  },
};

export const Now_Playing_Movie =
  "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
