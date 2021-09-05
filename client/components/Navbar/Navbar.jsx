import { useContext } from "react";
import { MenuIcon } from "@heroicons/react/solid";

import { MenuContext } from "../../context/MenuContext";
import Menu from "./Menu.jsx";

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
        <div className="flex flex-col bg-lightBlue fixed top-0 right-0 p-5 z-20 w-1/2 h-full transition ease-in-out duration-300">
          <Menu menuClick={menuClick} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
