import Profile from "../../components/Profile/Profile";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <div className="bg-mainFadedSteel min-h-screen">
      <Navbar />
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default index;
