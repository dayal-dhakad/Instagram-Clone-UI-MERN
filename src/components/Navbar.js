import React from "react";
import instaLogo from "../assets/instalogo.png";
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed w-[50%] flex justify-between items-center bg-white   border-b-[1px] border-black  ">
      <div className="ml-3">
        <img className="h-16 w-32" src={instaLogo} alt="" />
      </div>
      <div className="flex gap-4 items-center justify-center mr-3">
        <FaRegHeart className="text-2xl" />
        <RiMessengerLine className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
