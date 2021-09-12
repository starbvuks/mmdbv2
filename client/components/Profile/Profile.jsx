import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    const id = userToken.user.id;

    axios
      .get(`http://localhost:451/auth/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));

    const faves = user.favorites;
    for (let i = 0; i < faves.length; i++) {
      axios
        .get(`http://localhost:451/movies/${faves[i]}`)
        .then((res) => {
          setFavorites((prev) => [...prev, res.data]);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  console.log(favorites);

  return (
    <div className="flex flex-col mx-7 mt-7">
      <div className="flex font-poppins font-medium text-lg text-mainGrey">
        <div className="bg-mainGrey w-40 h-40 rounded-lg" />
        <div className="flex flex-col ml-4">
          <span className="text-2xl font-semibold">{user.username}</span>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="mt-9">
        <span className="text-2xl font-poppins font-semibold text-mainGreyDark">
          Favourites
        </span>
        {favorites.map((favorite, index) => (
          <div>
            <span className="text-2xl font-poppins font-semibold text-mainGreyDark">
              {favorite.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
