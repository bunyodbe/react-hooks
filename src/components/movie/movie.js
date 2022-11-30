import MovieList from "./movieList";
import MovieNav from "./movieNav";
import { MovieProvider } from "../context/movieContext";
import AddMovie from "./addMovie";

const Movie = () => {
  return (
    <MovieProvider>
      <div className="container mt-5 rounded shadow p-5">
        <MovieNav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default Movie;
