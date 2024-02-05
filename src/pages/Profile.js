import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import profileData from "../profileData";
import { CiSquarePlus } from "react-icons/ci";
import Highlights from "../components/Highlights";
import { MdGridOn } from "react-icons/md";
import AllPosts from "../components/AllPosts";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
import BASE_URL from "../config";

import { useNavigate } from "react-router-dom";

function Profile() {
  const [profileInfo, setProfileInfo] = useState();
  const { userId } = useContext(AppContext);
  const { setProfilePhoto } = useContext(AppContext);

  const navigate = useNavigate();
  const active = window.localStorage.getItem("isActive");
  const [profileLoading, setProfileLoading] = useState(true);

  function editProfileHandler() {
    navigate("/editprofile");
  }

  useEffect(() => {
    if (active && userId) {
      async function fetchProfile() {
        try {
          const response = await axios.get(
            `${BASE_URL}/protected/profile/${userId}`,
            {
              headers: {
                authorization: localStorage.getItem("token"),
              },
            }
          );
          setProfileInfo(response.data.data);
          setProfileLoading(false);
          setProfilePhoto(response.data.data.profileImg);
        } catch (error) {
          console.log("error fetching profile", error);
        }
      }
      setProfileLoading(true);
      fetchProfile();
    }
  }, [active, userId]);

  return (
    <div>
      {profileLoading ? (
        <div>
          Profile is loading
          <div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="flex justify-between items-center pt-2 mb-4">
            <p className="ml-8 font-semibold">{profileInfo.username}</p>
            <div className="flex justify-center items-center gap-4 mr-4">
              <CiSquarePlus className="text-3xl" />
              <RxHamburgerMenu className="text-3xl" />
            </div>
          </div>

          <div className="flex  items-center">
            <div className="w-[30%] ml-8 ">
              <img
                className="w-24 h-24 rounded-full"
                src={profileInfo.profileImg}
                alt=""
              />
            </div>
            <div className="flex justify-evenly gap-20 items-center">
              <div className="flex flex-col items-center justify-center">
                <p>{profileData.postCount}</p>
                <p>posts</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>{profileData.followers}</p>
                <p>followers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p>{profileData.following}</p>
                <p>following</p>
              </div>
            </div>
          </div>

          <div className="ml-5">
            <p className="font-semibold">{profileInfo.name}</p>
            <p className="text-sm text-slate-600">{profileInfo.bio}</p>
          </div>

          <div className="flex items-center justify-evenly mt-5 mb-5">
            <button
              onClick={editProfileHandler}
              className="bg-slate-300 w-2/5 rounded-lg pt-1 pb-1 pr-5 pl-5"
            >
              Edit profile
            </button>
            <button className="bg-slate-300 w-2/5 rounded-lg pt-1 pb-1 pr-5 pl-5">
              Share profile
            </button>
          </div>

          <div className="">
            <Highlights />
          </div>

          <div className="flex justify-center items-center mt-5 border-b-[1px] border-black">
            <MdGridOn className="text-3xl" />
          </div>

          <div className="posts">
            <AllPosts />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Profile;
