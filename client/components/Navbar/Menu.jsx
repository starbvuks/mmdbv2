import React from "react";
import { XCircleIcon as Exit } from "@heroicons/react/solid";

const Menu = ({ menuClick }) => {
  return (
    <div>
      <Exit className="text-darkBlue w-1/6" onClick={() => menuClick()} />
      <div className="flex flex-col divide-solid divide-y-2 gap-y-3 mt-10 font-poppins font-bold text-xl text-darkBlue">
        <span>About</span>
        <span className="pt-3">Story</span>
        <span className="pt-3">Science</span>
      </div>
    </div>
  );
};

export default Menu;
