import LandingCard from "./LandingCard.jsx";

const Landing = () => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center w-full h-full bg-cover md:border md:border-blue-200 md:border-opacity-75 md:shadow-lg"
        style={{
          background:
            "linear-gradient(#2e3c48, rgba(255,255,255,0) 20%, #2e3c48), url(https://c4.wallpaperflare.com/wallpaper/339/542/455/movie-the-thing-1982-wallpaper-preview.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxWidth: "65rem",
          minHeight: "20rem",
        }}
      >
        <span className="font-poppins font-bold text-5xl text-mainGrey px-7">
          My <br />
          Favourites
        </span>
      </div>
      <LandingCard />
    </div>
  );
};

export default Landing;
