import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[25%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-5">
            <button className="border bg-blue-500 text-white border-blue-500 py-2 px-5 rounded-2xl">
              Play Now
            </button>
            <button className="border bg-gray-200 text-black border-gray-300 py-2 px-5 rounded-2xl ml-4">
              Add To Watchlist
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
            {truncateString(movie?.overview, 170)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
