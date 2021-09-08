import { useState, useEffect } from "react";
import Link from "next/link";

import { XCircleIcon as Exit } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import { CollectionIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { BookmarkIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/solid";

const NavMenu = ({ menuClick }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenString = localStorage.getItem("user");
    const userToken = JSON.parse(tokenString);
    userToken ? setToken(userToken) : null;
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-mainNavHead py-5 px-7">
        <button className="flex py-1 justify-end">
          <Exit className="text-mainGrey w-1/4 " onClick={() => menuClick()} />
        </button>
        <div className="flex flex-col items-center text-right text-lg text-mainGrey font-poppins">
          <span>
            Welcome to <br />
            <span className="font-bold text-2xl text-mainYellow">MMDb</span>
          </span>
          <span className="font-normal text-xs mt-2">by sarvag kalari</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-14 mt-10 font-poppins font-bold text-xl text-darkBlue">
        {token ? (
          <Link href="/profile">
            <a className="text-mainYellow w-1/3 cursor-pointer">
              <UserCircleIcon />
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="text-mainYellow w-1/3 cursor-pointer">
              <UserCircleIcon />
            </a>
          </Link>
        )}
        <CollectionIcon className="text-mainYellow w-1/3" />
        <StarIcon className="text-mainYellow w-1/3" />
        <BookmarkIcon className="text-mainYellow w-1/3" />
        <BookOpenIcon className="text-mainYellow w-1/3" />
      </div>
    </div>
  );
};

export default NavMenu;
