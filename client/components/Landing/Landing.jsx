import LandingCard from "./LandingCard.jsx";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center bg-landingBanner w-full h-72 bg-cover bg-center xl:h-full">
        <span className="font-poppins font-bold text-5xl text-mainGrey px-7 py-36">
          My <br />
          Favourites
        </span>
      </div>
      <LandingCard />
    </div>
  );
};

export default Landing;
