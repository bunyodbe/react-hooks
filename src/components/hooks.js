import { useState, useCallback, useMemo } from "react";
import List from "./list";

const Hooks = () => {
  /*----------------------- useState -----------------------*/

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const onIncrementHandler = () => {
    setNumber((prevState) => prevState + 1);
  };

  const onDecrementHandler = () => {
    setNumber((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  const onResetHandler = () => {
    setNumber(0);
  };

  const theme = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    position: "relative",
  };

  /*----------------------- useCallBack -----------------------*/

  const items = useCallback(
    (num) => {
      return new Array(num).fill("").map((_, index) => index + 1);
    },
    [number]
  );

  /*----------------------- useMemo -----------------------*/

  // const items = useMemo(() => {
  //   return (num) => new Array(num).fill("").map((_, index) => index + 1);
  // }, [number]);

  return (
    <div className="w-50 shadow rounded p-5 mx-auto mt-5" style={theme}>
      <div className="counter text-center" style={{ fontSize: 30 }}>
        Counter: {number}
      </div>
      <div className="btns d-flex mt-3 justify-content-center gap-3">
        <button className="btn btn-success px-3" onClick={onIncrementHandler}>
          +
        </button>
        <button className="btn btn-warning px-3" onClick={onResetHandler}>
          0
        </button>
        <button className="btn btn-danger px-3" onClick={onDecrementHandler}>
          -
        </button>
      </div>
      <button
        className={`btn ${dark ? "btn-primary" : "btn-dark"}`}
        style={{ position: "absolute", top: 10, right: 10 }}
        onClick={() => setDark((prevState) => !prevState)}
      >
        Theme
      </button>
      <List theme={dark} items={items} number={number} />
    </div>
  );
};

export default Hooks;
