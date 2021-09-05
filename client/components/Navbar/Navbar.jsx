import { useContext } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import { MenuContext } from "../../context/MenuContext";
import NavMenu from "./NavMenu.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useContext(MenuContext);

  const menuClick = () => {
    setIsOpen((openState) => !openState);
  };

  return (
    <div className="flex w-full p-5 justify-between">
      <span>mmdb</span>
      <MenuIcon className="w-7 h-7" onClick={() => menuClick()} />
      {isOpen ? (
        <div className="flex flex-col bg-mainNav fixed top-0 right-0 z-20 w-2/7 h-full shadow-xl transition ease-in-out duration-300">
          <NavMenu menuClick={menuClick} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
