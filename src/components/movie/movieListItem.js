const MovieListItem = ({ name, price }) => {
  return (
    <li className="list-group-item mb-1 d-flex justify-content-between ">
      <span>{name}</span>
      <span>{price}</span>
    </li>
  );
};

export default MovieListItem;
