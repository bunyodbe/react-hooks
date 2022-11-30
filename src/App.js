import Auth from "./components/auth";
import Hooks from "./components/hooks";
import Movie from "./components/movie/movie";

function App() {
  return (
    <div className="app font-monospace ">
      <Hooks />
      <Auth />
      <Movie />
    </div>
  );
}

export default App;
