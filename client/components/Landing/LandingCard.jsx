import { useState, useEffect } from "react";
import axios from "axios";

const LandingCard = () => {
  const [movies, setMovies] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState({});

  const setVisibility = () => {
    setDetailsVisible((prevState) => !prevState);
  };

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
        <button
          className="flex flex-col flex-none mt-3 bg-mainNavHead w-5/12 rounded-xl shadow-lg relative"
          key={index}
          onClick={() => setVisibility()}
        >
          <img
            src={movie.poster}
            alt="poster"
            className="h-5/6 w-full object-cover rounded-t-xl"
          />
          <div className="flex w-full justify-between items-center text-mainGrey font-poppins">
            <span className="font-bold text-lg p-3">{movie.name}</span>
            <span className="font-semibold text-sm bg-mainFadedSteel p-1.5 mr-5 rounded-lg">
              {movie.rating}
            </span>
            {detailsVisible ? (
              <span className="font-medium absolute top-0 bottom-0 right-0 left-0 text-sm bg-mainBlueSteel p-3 rounded-lg">
                {movie.description}
              </span>
            ) : null}
          </div>
        </button>
      ))}
    </div>
  );
};

export default LandingCard;
