import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [token, setToken] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    userToken ? setToken(userToken) : null;
  }, []);

  const id = token.user.id;

  useEffect(() => {
    axios
      .get(`http://localhost:451/auth/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(user);

  return (
    <div className="flex flex-col mx-7 mt-7">
      <div className="flex font-poppins font-medium text-lg text-mainGrey">
        <div className="bg-mainGrey w-40 h-40 rounded-lg" />
        <div className="flex flex-col ml-4">
          <span className="text-2xl font-semibold">token</span>
          <span>token</span>
        </div>
      </div>
      <div className="mt-9">
        <span className="text-2xl font-poppins font-semibold text-mainGreyDark">
          Favourites
        </span>
      </div>
    </div>
  );
};

export default Profile;
