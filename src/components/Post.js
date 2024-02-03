import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { IoPlayForwardOutline } from "react-icons/io5";
import { FaRegSave } from "react-icons/fa";

function Post({
  id,
  profileImg,
  username,
  image,
  description,
  likes,
  comments,
  location,
}) {
  description =
    description && description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  return (
    <div className="">
      <div className="flex justify-between gap-32 items-center h-10 ml-4 mr-4 mt-3 mb-1">
        <div className="flex items-center justify-around gap-2">
          <img className="h-7 w-7 rounded-full " src={profileImg} alt="" />
          <p className="text-sm font-semibold"> {username}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div>
        <img className="w-full" src={image} alt="" />
      </div>

      <div className="flex justify-between items-center m-3">
        <div className="flex gap-5 items-center justify-center">
          <FaRegHeart className="text-2xl" />
          <FaRegComment className="text-2xl" />
          <IoPlayForwardOutline className="text-2xl" />
        </div>
        <FaRegSave className="text-2xl" />
      </div>

      <div className="ml-2">
        <p>Liked by {likes}</p>
      </div>

      <div className="ml-2">
        <p className="font-semibold">
          {username}{" "}
          <span className="font-normal">
            {description} <span className="text-slate-500">more</span>
          </span>
        </p>
      </div>
      <div className="ml-2">
        <p className="text-slate-500">view all {comments} comments</p>
      </div>

      <div className="flex ml-2 items-center gap-3 mt-1">
        <img className="h-7 w-7 rounded-full " src={profileImg} alt="" />
        <button className="text-slate-400"> add a comment</button>
      </div>
    </div>
  );
}

export default Post;
