import React from "react";
import { MdHomeFilled } from "react-icons/md";
import profileData from "../profileData";
// import { GoHome } from "react-icons/go"; <GoHome />
// import { IoSearch } from "react-icons/io5";  <IoSearch />
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { BsCameraReels } from "react-icons/bs";

function Footer() {
  return (
    <div className="bottom-0 bg-white border-t-[1px] border-black fixed w-[50%]">
      <div className="flex mt-2 pb-2 justify-around items-center">
        <MdHomeFilled className="text-3xl" />
        <IoIosSearch className="text-3xl" />
        <CiSquarePlus className="text-3xl" />
        <BsCameraReels className="text-3xl" />
        <div className="">
          <img
            className="rounded-full w-9 h-9 "
            src={profileData.profileImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
