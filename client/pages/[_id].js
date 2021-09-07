import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:451/movies");
  const data = res.data;
  const paths = data.map((movie) => {
    return {
      params: { _id: movie._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await axios.get("http://localhost:451/movies/" + id);
//   const data = JSON.stringify(res);

//   return {
//     props: data,
//   };
// };

const MoviePage = ({ data }) => {
  const router = useRouter();
  console.log(router.query._id);

  return (
    <div>
      <span>{res}</span>
    </div>
  );
};

export default MoviePage;
