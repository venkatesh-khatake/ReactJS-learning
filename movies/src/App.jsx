import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let movieData = [
    {
      Title: "The Lion King",
      Year: "2019",
      Runtime: "118 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    },
    {
      Title: "Mowgli: Legend of the Jungle",
      Year: "2018",
      Runtime: "104 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
    },
    {
      Title: "Doctor Strange",
      Year: "2016",
      Runtime: "115 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
    },
    {
      Title: "John Wick",
      Year: "2014",
      Runtime: "101 min",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    },
    {
      Title: "The Notebook",
      Year: "2004",
      Runtime: "123 min",
    },
  ];
  return (
    <>


      <h1>Movies</h1>
      <div className="movie-container">
        {
          movieData.map((movie) =>(
            <div className="card">
        <img src={movie.Poster} alt="" />
        <h2 className="movie-name">{movie.Title}</h2>
      </div>
          ))
        }
      


      </div>
      <h5>My name is Venkatesh</h5>
      
    </>
  );
}

export default App;
