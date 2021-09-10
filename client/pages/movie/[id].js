import { useState } from "react";
import axios from "axios";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { ChevronDownIcon } from "@heroicons/react/solid";
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
  const [overview, setOverview] = useState(false);

  return (
    <div className="min-h-screen items-center bg-mainFadedSteel">
      <Navbar />
      <div className="flex gap-5 px-7 mt-14 xl:pl-44 xl:pr-14">
        <img
          src={data.poster}
          alt="poster"
          className="border-2 border-yellow-300 w-1/2 xl:w-1/3 object-cover"
        />
        <div className="flex flex-col">
          <span className="text-mainYellow text-4xl xl:text-5xl font-bold break-all">
            {data.name}
          </span>
          <div className="text-mainGrey flex items-center gap-x-2 text-sm xl:text-lg font-semibold mt-5 lg:mt-6">
            <span className="bg-mainNavHead py-2 px-4 rounded-xl">
              Released: {data.released}
            </span>{" "}
            <span className="bg-mainNavHead py-2 px-4 rounded-xl">
              Rating:{" "}
              <span className="text-md text-mainYellow">{data.rating} / 5</span>
            </span>
          </div>
          <div className="flex flex-col items-start gap-y-4 text-mainGrey bg-mainNavHead p-5 rounded-xl mt-7 mr-10">
            <button
              onClick={() => setOverview((prev) => !prev)}
              className="flex items-center gap-5 text-3xl font-semibold font-montserrat"
            >
              Overview
              {overview ? (
                <ChevronUpIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
              ) : (
                <ChevronDownIcon className="w-8 h-8 bg-mainNav p-0.5 rounded-full" />
              )}
            </button>
            {overview ? (
              <p className="text-mainGreyDark">{data.description}</p>
            ) : null}
          </div>
          <div className="bg-mainNavHead text-mainGrey flex flex-col p-3 gap-y-3 divide-solid divide-y divide-mainGrey rounded-xl mt-4 w-1/3">
            <span className="text-2xl font-bold">Cast</span>
            <span className="text-md font-medium pt-3">
              {data.production.actors}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
