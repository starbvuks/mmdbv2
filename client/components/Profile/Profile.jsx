import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    const id = userToken.user.id;

    const getUserData = async () => {
      try {
        const res = await axios.get(`https://mmdbv2.herokuapp.com/auth/${id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const getFavoritesData = async () => {
      const faves = await user.favorites;
      for (let i = 0; i < faves.length; i++) {
        try {
          const res = await axios.get(
            `https://mmdbv2.herokuapp.com/movies/${faves[i]}`
          );
          setFavorites((prev) => [...prev, res.data]);
        } catch (err) {
          console.log(err);
        }
      }
    };

    if (user.length !== 0) {
      getFavoritesData();
    }
  }, [user]);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    Router.push("/");
  };

  return (
    <div className="flex flex-col mx-7 mt-7">
      <div className="flex font-poppins font-medium text-lg text-mainGrey">
        <div className="bg-mainGrey w-40 h-40 rounded-lg" />
        <div className="flex flex-col ml-4">
          <span className="text-2xl font-semibold">{user.username}</span>
          <span>{user.email}</span>
          <button
            onClick={() => logoutHandler()}
            className="bg-red-500 text-white font-poppins text-sm font-semibold mt-3 py-1.5 mr-28 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-9">
        <span className="text-3xl mb-7 font-poppins font-bold text-mainGreyDark">
          Favourites
        </span>
        <div className="flex flex-wrap justify-center gap-7">
          {favorites.map((favorite, index) => (
            <Link className="flex" href={`/movie/${favorite._id}`}>
              <img
                src={favorite.poster}
                key={index}
                className="w-1/4 rounded-lg hover:cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
