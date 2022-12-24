import { useEffect, useState } from "react";
import { HeartIcon as Unfavorited } from "@heroicons/react/outline";
import { HeartIcon as Favorited } from "@heroicons/react/solid";
import Link from "next/link";
import axios from "axios";

const Catalogue = () => {
  const [user, setUser] = useState([]);
  const [movies, setMovies] = useState([]);

  if (typeof window !== "undefined") {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    globalThis.id = userToken.user.id;
  }

  useEffect(() => {
    axios
      .get(`https://mmdbv2-production.up.railway.app/auth/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://mmdbv2-production.up.railway.app/movies?page=1&limit=20")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const favoriteToggle = (e) => {
    axios
      .post(`https://mmdbv2-production.up.railway.app/auth/${id}`, {
        favorite: e,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mx-5 pb-20 lg:mx-10 xl:mx-48">
      <div className="flex flex-col">
        <span className="font-poppins font-bold text-5xl text-mainGrey text-center sm:text-left py-10 sm:py-7 xl:text-6xl break-words">
          Popular Films
        </span>
      </div>
      <div className="flex justify-center sm:justify-start gap-6 flex-wrap lg:mt-6">
        {movies.map((movie, index) => (
          <div
            className="flex flex-col flex-none mt-3 bg-mainNavHead w-5/12 sm:w-1/4 md:w-1/5 xl:w-48 rounded-xl shadow-lg relative transition ease-in duration-300 transform hover:scale-105"
            key={index}
          >
            <img
              src={movie.poster}
              alt="poster"
              className="h-full w-full object-cover rounded-xl"
            />
            <div className="flex w-full justify-between items-center text-mainGrey font-poppins leading-tight">
              <div className="flex flex-col select-none text-center text-mainYellow justify-center gap-y-3 absolute top-0 bottom-0 right-0 left-0 text-sm bg-mainNavHead p-3 rounded-lg opacity-0 transition ease-in duration-400 hover:opacity-95">
                <span className="font-bold text-lg lg:text-xl px-2">
                  {movie.name}
                </span>
                <div className="flex items-center gap-3 justify-center">
                  <span className="font-light text-sm shadow-sm p-1.5 rounded-md text-mainGrey">
                    {movie.released}
                  </span>
                  <span className="font-light text-sm shadow-sm rounded-md text-mainGrey">
                    {movie.rating} / 5
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 mt-10 px-2">
                  <Link href={`/movie/${movie._id}`}>
                    <a className="bg-mainYellow text-mainFadedSteel font-semibold w-2/3 xl:w-28 text-xs py-2 rounded-lg">
                      Details
                    </a>
                  </Link>
                  <button
                    onClick={() => favoriteToggle(movie._id)}
                    className="text-mainGrey mb-1"
                  >
                    {undefined !== user.favorites ? (
                      user.favorites.includes(movie._id) ? (
                        <Favorited className="w-5 h-5" />
                      ) : (
                        <Unfavorited className="w-5 h-5" />
                      )
                    ) : (
                      <span>nah</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
