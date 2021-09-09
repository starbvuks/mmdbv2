import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar/Navbar";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:451/movies");
  const data = await res.data;

  const paths = data.map((movie) => {
    return {
      params: { id: movie._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:451/movies/" + id);
  const data = await res.text();

  return {
    props: { movie: data },
  };
};

const MoviePage = ({ movie }) => {
  const data = JSON.parse(movie);
  const wallpaper = data.wallpaper;

  return (
    <div className="min-h-screen flex flex-col items-center bg-mainFadedSteel">
      <Navbar />
      <div className="px-10">
        <img src={data.wallpaper} alt="poster" className="border-2" />
        <div className="flex flex-col">
          <span className="text-mainGrey text-2xl font-bold">{data.name}</span>
          <span className="text-mainGrey text-xl">
            {data.production.director}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
