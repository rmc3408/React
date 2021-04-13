import React, { useState, useEffect } from "react";
import axios from 'axios';

const SWAPMovies = () => {
    const [num, setNum] = useState(1);
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        async function getFilms() {
            const result = await axios.get(`https://swapi.dev/api/films/${num}`);
            console.log(result.data);
            setMovie(result.data);
        };
        getFilms();
    }, [num]);

  return (
    <div>
      <h2>Pick a movie: </h2>
      <p>Your choice is {movie.title}</p>
      <select value={num} onChange={(e)=> setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default SWAPMovies;
