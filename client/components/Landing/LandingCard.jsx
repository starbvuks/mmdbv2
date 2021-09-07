import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const LandingCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:451/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center gap-7 flex-wrap mt-10 mx-5">
      {movies.map((movie, index) => (
        <Link href={`/${movie._id}`}>
          <a
            className="flex flex-col flex-none mt-3 bg-mainNavHead w-5/12 rounded-xl shadow-lg relative transition ease-in duration-300 transform hover:scale-105"
            key={index}
          >
            <div>
              <img
                src={movie.poster}
                alt="poster"
                className="h-5/6 w-full object-cover rounded-t-xl"
              />
              <div className="flex w-full justify-between items-center text-mainGrey font-poppins leading-tight">
                <span className="font-bold text-lg p-3 text-left">
                  {movie.name}
                </span>
                <span className="font-semibold text-sm bg-mainFadedSteel p-1.5 mr-5 rounded-lg">
                  {movie.rating}
                </span>
                <div className="flex flex-col gap-y-3 absolute top-0 bottom-0 right-0 left-0 text-sm bg-mainBlueSteel p-3 rounded-lg opacity-0 transition ease-in duration-400 hover:opacity-100">
                  <span className="font-bold text-2xl mt-2">
                    {movie.name} <br />
                  </span>
                  <div className="flex gap-3 justify-center">
                    <span className="font-light text-sm bg-mainNavHead p-1.5 rounded-md text-mainGrey">
                      {movie.released}
                    </span>
                    <span className="font-light text-sm bg-mainNavHead p-1.5 rounded-md text-mainGrey">
                      {movie.rating} / 5
                    </span>
                  </div>
                  <span className="font-medium">{movie.description}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LandingCard;
