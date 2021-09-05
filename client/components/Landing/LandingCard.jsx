import { useState, useEffect } from "react";
import axios from "axios";

const LandingCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4510/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center gap-7 flex-wrap mt-20 mx-5">
      {movies.map((movie, index) => (
        <div
          className="flex flex-col flex-none bg-mainNavHead w-5/12 rounded-xl shadow-lg"
          key={index}
        >
          <img
            src={movie.poster}
            alt="poster"
            className="h-5/6 w-full object-cover rounded-t-xl"
          />
          <div className="flex justify-between items-center text-mainGrey font-poppins ">
            <span className="font-bold text-lg p-3">{movie.name}</span>
            <span className="font-semibold text-sm bg-mainFadedSteel p-1.5 mr-5 rounded-lg">
              {movie.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingCard;
