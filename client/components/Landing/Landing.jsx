import LandingCard from "./LandingCard.jsx";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-poppins font-semibold text-4xl text-mainGrey">
        Our Favourites
      </span>
      <LandingCard />
    </div>
  );
};

export default Landing;
