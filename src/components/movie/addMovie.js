import { useContext, useState } from "react";
import { MovieContext } from "../context/movieContext";
const AddMovie = () => {
  const [state, setState] = useState({ name: "", price: "" });
  const [movies, setMovies] = useContext(MovieContext);
  const updateState = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const generateID = () => new Date().getTime();

  const addHandler = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: state.name, price: state.price + "$", id: generateID() },
    ]);
    setState({ name: "", price: "" });
  };

  return (
    <form className="d-flex gap-3 mb-3" onSubmit={addHandler}>
      <input
        className="form-control"
        type="text"
        placeholder="Moive name"
        name="name"
        value={state.name}
        onChange={updateState}
      />
      <input
        className="form-control"
        type="number"
        placeholder="Moive price"
        name="price"
        value={state.price}
        onChange={updateState}
        min="0"
      />
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default AddMovie;
