import React, { useContext } from "react";
import { MdHomeFilled } from "react-icons/md";
import profileData from "../profileData";
// import { GoHome } from "react-icons/go"; <GoHome />
// import { IoSearch } from "react-icons/io5";  <IoSearch />
import { IoIosSearch } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { BsCameraReels } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { toast } from 'react-hot-toast'

function Footer() {
  const navigate = useNavigate();
  const {profilePhoto} = useContext(AppContext);
  function logoutHandler() {
    window.localStorage.clear();
    toast.error("Logged Out")
    navigate('/login')
  }
  



  return (
    <div className="bottom-0 bg-white border-t-[1px] border-black fixed w-[50%]">
      <div className="flex mt-2 pb-2 justify-around items-center">
        <MdHomeFilled onClick={() => navigate("/")} className="text-3xl" />
        <IoIosSearch className="text-3xl" />
        <CiSquarePlus className="text-3xl" />
        <BsCameraReels onClick={logoutHandler} className="text-3xl" />
        <div onClick={() => navigate("/profile")} className="">
          <img
            className="rounded-full w-9 h-9 "
            src={profilePhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
