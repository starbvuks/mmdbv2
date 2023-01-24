import { useState } from "react";
import axios from "axios";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar/Navbar";

export const getStaticPaths = async () => {
  const res = await axios.get(`https://mmdb-api.onrender.com/movies`);
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
  const res = await fetch(`https://mmdb-api.onrender.com/movies/${id}`);
  const data = await res.text();

  return {
    props: { movie: data },
  };
};

const MoviePage = ({ movie }) => {
  const data = JSON.parse(movie);

  const [overview, setOverview] = useState(false);
  const [details, setDetails] = useState(false);

  return (
    <div className="min-h-screen items-center bg-mainFadedSteel">
      <Navbar />
      <div className="flex gap-5 px-7 mt-14 xl:px-48">
        <img
          src={data.poster}
          alt="poster"
          className="border-2 border-yellow-300 w-48 xl:w-1/4 object-contain"
        />
        <div>
          <span className="text-mainYellow text-4xl xl:text-5xl font-bold break-all">
            {data.name}
          </span>
          <div className="text-mainGrey flex items-center gap-x-2 text-sm xl:text-lg font-semibold mt-5 lg:mt-6">
            <span className="bg-mainNavHead py-1 px-2 lg:py-2 lg:px-4 rounded-xl">
              Released: {data.released}
            </span>{" "}
            <span className="bg-mainNavHead py-1 px-2 lg:py-2 lg:px-4 rounded-xl">
              Rating:{" "}
              <span className="text-md text-mainYellow">{data.rating} / 5</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start mx-7 gap-3 xl:mx-44 lg:pb-20">
        <div className="bg-mainNavHead text-mainGrey flex flex-col p-4 rounded-xl mt-6 w-1/3 lg:w-1/3">
          <button
            onClick={() => setDetails((prev) => !prev)}
            className="flex items-center justify-between gap-5 text-2xl font-bold"
          >
            Cast{" "}
            {details ? (
              <ChevronUpIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
            ) : (
              <ChevronDownIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
            )}
          </button>

          {details ? (
            <span className="text-md font-medium pt-3">
              {data.production.actors}
            </span>
          ) : null}
        </div>
        <div className="bg-mainNavHead text-mainGrey flex flex-col flex-1 p-4 rounded-xl mt-6 w-2/3 lg:w-2/3">
          <button
            onClick={() => setOverview((prev) => !prev)}
            className="flex items-center justify-between gap-5 text-2xl font-bold"
          >
            Overview{" "}
            {overview ? (
              <ChevronUpIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
            ) : (
              <ChevronDownIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
            )}
          </button>

          {overview ? (
            <span className="text-md font-medium pt-3">{data.description}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
