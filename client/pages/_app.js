import "tailwindcss/tailwind.css";

import { MenuProvider } from "../context/MenuContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />;
    </MenuProvider>
  );
}

export default MyApp;
