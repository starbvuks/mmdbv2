import LandingCard from "./LandingCard.jsx";
import LandingCardGuest from "./LandingCardGuest.jsx";

const Landing = () => {
  const page = () => {
    if (typeof window !== "undefined" && window.localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-landingBanner w-full h-72 bg-cover bg-center xl:h-full">
        <span className="font-poppins font-bold text-5xl text-mainGrey px-7 py-36">
          Our <br />
          Favorites
        </span>
      </div>
      {page() ? (
        <LandingCard />
      ) : (
        <>
          <LandingCardGuest />
        </>
      )}
    </div>
  );
};

export default Landing;
