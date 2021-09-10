import { useState, useEffect } from "react";

const Profile = () => {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    userToken ? setToken(userToken) : null;
  }, []);

  return (
    <div className="flex flex-col mx-7 mt-7">
      <div className="flex font-poppins font-medium text-lg text-mainGrey">
        <div className="bg-mainGrey w-40 h-40 rounded-lg" />
        <div className="flex flex-col ml-4">
          <span className="text-2xl font-semibold">{token.user.username}</span>
          <span>{token.user.email}</span>
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
