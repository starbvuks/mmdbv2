import { useContext, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { MenuContext } from "../../context/MenuContext";
import NavMenu from "./NavMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useContext(MenuContext);

  const menuClick = () => {
    setIsOpen((openState) => !openState);
  };

  return (
    <div className="flex w-full p-5 xl:pt-8 xl:px-48 mb-7 justify-between items-center">
      <Link href="/">
        <a className="w-1/4 md:w-32">
          <img src="/mmdb-logo.png" alt="logo" />
        </a>
      </Link>
      <button className="bg-mainNavHead p-2 rounded-xl">
        <MenuIcon
          className="w-10 h-10 text-mainYellow"
          onClick={() => menuClick()}
        />
      </button>
      {isOpen ? (
        <div className="flex flex-col bg-mainNav fixed top-0 right-0 z-20 w-2/7 md:w-36 h-screen shadow-xl">
          <NavMenu menuClick={menuClick} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
