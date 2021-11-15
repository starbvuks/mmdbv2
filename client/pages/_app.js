import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Head from "next/head";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { MenuProvider } from "../context/MenuContext.js";

const override = css`
  display: flex;
`;

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>mmdb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="My Movie Database - (MMDb) re-vamped by Sarvag Kalari"
        />
        <meta
          name="keywords"
          content="React, Web Dev, Next, Javascript, Html, Tailwind, Movie"
        />
        <meta name="theme-color" content="#2e3c48" />
        <meta name="author" content="Sarvag Kalari" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/mmdb-logo.png" />
        <meta property="og:title" content="MMDB" />
        <meta property="og:url" content="https://mmdbv2.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      {loading ? (
        <div class="flex h-screen items-center justify-center">
          <MoonLoader
            css={override}
            loading={loading}
            size={60}
            color="#c3d8c8"
          />
        </div>
      ) : (
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      )}
    </>
  );
}

export default MyApp;
