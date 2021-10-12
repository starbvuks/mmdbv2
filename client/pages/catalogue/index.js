import Catalogue from "../../components/Catalogue/Catalogue";
import Navbar from "../../components/Navbar/Navbar";

const index = () => {
  return (
    <div className="bg-mainFadedSteel min-h-screen">
      <Navbar />
      <div>
        <Catalogue />
      </div>
    </div>
  );
};

export default index;
