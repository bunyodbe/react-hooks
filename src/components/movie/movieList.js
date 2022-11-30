import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import MovieListItem from "./movieListItem";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <ul className="list-group">
      {movies.map((item) => (
        <MovieListItem key={item.id} name={item.name} price={item.price} />
      ))}
    </ul>
  );
};

export default MovieList;
