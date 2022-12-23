import { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const sendMessage = async () => {
    await fetch("http://localhost:4510/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: user }),
    })
      .then(function (response) {
        console.log(response);
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    <div className="flex flex-col bg-mainFadedSteel items-center mx-7 mt-7 xl:mx-48">
      <div className="flex flex-col items-center font-poppins font-medium text-lg text-mainGrey">
        <img
          src="https://i.pinimg.com/originals/1f/01/70/1f01701445a03d0eb322d4ae8c77795d.jpg"
          className="bg-mainGrey w-40 rounded-lg"
        />
        <div className="flex flex-col mt-4 items-center">
          <span className="text-2xl font-semibold">{user.username}</span>
          <span>{user.email}</span>
          <button
            onClick={() => logoutHandler()}
            className="bg-red-500 text-white font-poppins text-sm font-semibold mt-3 px-3 lg-px-0 py-1.5 rounded-xl"
          >
            Logout
          </button>
          {/* <button
            onClick={() => sendMessage()}
            className="bg-green-500 text-white font-poppins text-sm font-semibold mt-3 px-3 lg-px-0 py-1.5 rounded-xl"
          >
            Send Whatsapp Data
          </button> */}
        </div>
      </div>
      <div className="flex flex-col self-start mt-20">
        <span className="text-3xl xl:text-5xl mb-7 font-poppins font-bold text-mainGreyDark">
          Favourites
        </span>
        <div className="flex flex-wrap mt-4 gap-7">
          {favorites.map((favorite, index) => (
            <Link className="flex" href={`/movie/${favorite._id}`}>
              <img
                src={favorite.poster}
                key={index}
                className="w-1/4 md:w-1/6 lg:w-32 xl:w-44 rounded-lg hover:cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
