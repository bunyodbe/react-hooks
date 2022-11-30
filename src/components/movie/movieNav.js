import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
const MovieNav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="d-flex justify-content-between mb-4 shadow p-3 rounded">
      <div className="logo text-primary">Movie</div>
      <div className="movie-count text-success">All movie: {movies.length}</div>
    </div>
  );
};

export default MovieNav;
