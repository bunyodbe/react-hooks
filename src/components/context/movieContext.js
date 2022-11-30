import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "The Lord of the Rings", price: "10$", id: 123 },
    { name: "The Dark Knight", price: "20$", id: 1234 },
    { name: "12 Angry Men", price: "30$", id: 12345 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
