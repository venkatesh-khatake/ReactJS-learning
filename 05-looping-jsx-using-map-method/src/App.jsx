import "./App.css";
import Movie from "./APIs/movie.json";

function App() {
  return (
    <>
      <h1>Movies</h1>
      <div className="movie-container">
        {Movie.map((movie) => (
          <div className="movie-card">
           <img src={movie.Poster} alt="" />
           <h2>{movie.Title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
