import React from "react";
import { XCircleIcon as Exit } from "@heroicons/react/solid";

const NavMenu = ({ menuClick }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-mainNavHead py-5 px-7">
        <Exit
          className="text-mainGrey w-1/4 self-end"
          onClick={() => menuClick()}
        />
        <div className="flex flex-col items-center text-right text-lg text-mainGrey font-poppins">
          <span>
            Welcome to <br />
            <span className="font-bold text-2xl text-mainYellow">MMDb</span>
          </span>
          <span className="font-normal text-xs mt-2">by sarvag kalari</span>
        </div>
      </div>
      <div className="flex flex-col divide-solid divide-y-2 gap-y-3 mt-10 font-poppins font-bold text-xl text-darkBlue">
        <span>About</span>
        <span className="pt-3">Story</span>
        <span className="pt-3">Science</span>
      </div>
    </div>
  );
};

export default NavMenu;
