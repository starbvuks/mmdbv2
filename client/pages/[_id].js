import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

// export const getStaticPaths = async () => {
//   const res = await axios.get("http://localhost:451/movies");

//   const paths = res.map((movie) => {
//     return {
//       params: { id: movie._id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getStaticProps = async () => {
  const router = useRouter();
  const id = router.query._id;
  const res = axios.get("http://localhost:451/movies/" + id);
  const data = await res.json().data();
  return {
    props: { movie: data },
  };
};

const MoviePage = () => {
  const router = useRouter();
  console.log(router.query._id);

  return (
    <div>
      <span>yo</span>
    </div>
  );
};

export default MoviePage;
