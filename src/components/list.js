import { useState, useEffect } from "react";

const List = ({ items, number, theme }) => {
  const [data, setData] = useState([]);
  const styles = {
    background: theme ? "#333" : "#fff",
    color: theme ? "#fff" : "#333",
    borderColor: theme ? "#fff" : "#333",
  };
  useEffect(() => {
    setData(items(number));
    console.log("req");
  }, [items]);
  return (
    <ul className="list-group mt-3">
      {data.map((item) => (
        <li key={item} className="list-group-item" style={styles}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
