import Head from "next/head";

import Navbar from "../components/Navbar/Navbar.jsx";
import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <div className="flex flex-col bg-mainFadedSteel items-center h-full">
      <Navbar />
      <Landing />
    </div>
  );
}
