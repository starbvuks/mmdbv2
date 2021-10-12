import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const LandingCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://mmdbv2.herokuapp.com/movies?page=1&limit=3")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center gap-7 flex-wrap mt-10 mx-5 lg:mx-10 xl:mx-32 ">
      {movies.map((movie, index) => (
        <div
          className="flex flex-col flex-none mt-3 bg-mainNavHead w-5/12 sm:w-1/3 md:w-1/4 lg:w-1/5 rounded-xl shadow-lg relative transition ease-in duration-300 transform hover:scale-105"
          key={index}
        >
          <img
            src={movie.poster}
            alt="poster"
            className="h-5/6 md:h-58 w-full object-cover rounded-t-xl"
          />
          <div className="flex w-full justify-between items-center text-mainGrey font-poppins leading-tight">
            <span className="font-semibold text-md p-3 text-left truncate hover:invisible">
              {movie.name}
            </span>
            <span className="font-semibold text-sm bg-mainFadedSteel px-1.5 py-1 mr-3 rounded-lg">
              {movie.rating}
            </span>
            <div className="flex flex-col text-center text-mainYellow justify-center gap-y-3 absolute top-0 bottom-0 right-0 left-0 text-sm bg-mainNavHead p-3 rounded-lg opacity-0 transition ease-in duration-400 hover:opacity-95">
              <span className="font-bold text-2xl px-2">{movie.name}</span>
              <div className="flex items-center gap-3 justify-center">
                <span className="font-light text-sm shadow-sm p-1.5 rounded-md text-mainGrey">
                  {movie.released}
                </span>
                <span className="font-light text-sm shadow-sm rounded-md text-mainGrey">
                  {movie.rating} / 5
                </span>
              </div>
              <Link href={`/movie/${movie._id}`}>
                <a className="bg-mainYellow text-mainFadedSteel font-semibold w-2/3 text-xs py-2 self-center mt-10 rounded-lg">
                  Details
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingCard;
