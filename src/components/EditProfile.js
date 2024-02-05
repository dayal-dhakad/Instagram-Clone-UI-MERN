import React, { useContext, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config";
import toast from "react-hot-toast";

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { userId, profilePhoto } = useContext(AppContext);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  async function changeProfileImg(event) {
    event.preventDefault();
    try {
      if (!selectedFile) {
        // Handle if no file is selected
        return;
      }

      const profileFormData = new FormData();
      profileFormData.append("profileImg", selectedFile);

      const response = await axios.post(
        `${BASE_URL}/upload/profileimgupload/${userId}`,
        profileFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful", response.data);
      toast.success("Picture Updated Successfully")
    } catch (error) {
      console.error("Error uploading image", error);
      toast.error("Error in Changing image ")
    }
  }

  return (
    <div className="bg-white">
      <div className="flex items-center justify-start ml-4 pt-3">
        <FaArrowLeftLong
          onClick={() => navigate(-1)}
          className="mr-8 text-2xl"
        />
        <p className="font-bold text-2xl">Edit profile</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="">
          {/* old picture */}
          <img className="w-20 h-20 rounded-full" src={profilePhoto} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <p className="text-blue-800 font-semibold text-sm">Edit picture</p> */}
          <form onSubmit={changeProfileImg} className="flex flex-col" action="">
            <label htmlFor="profileImg">Edit Picture</label>
            <input onChange={handleFileChange} type="file" name="profileImg" />
            <button className="bg-blue-700 text-white rounded-lg p-1">
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <form className="flex flex-col ml-4 mr-4" action="">
          <label className="mt-3" htmlFor="name">
            Name
          </label>
          <input className="" type="text" name="name" />
          <hr className="mt-2 " />

          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
          <hr className="mt-2 " />

          <label htmlFor="bio">Bio</label>
          <input type="text" name="bio" />
          <hr className="mt-2 " />

          <button className="bg-blue-700 text-white rounded-lg p-1">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
