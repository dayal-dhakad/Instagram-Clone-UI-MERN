import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();
  // const [userId, setUserId] = useState();
  const userId = window.localStorage.getItem("userId");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState();

  const active = window.localStorage.getItem("isActive");

  const [loginFormData, setloginFormData] = useState({
    username: "",
    password: "",
  });

  // Fetch Blog Data
  async function loginSubmitHandler(event) {
    event.preventDefault();
    console.log(loginFormData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        loginFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response);
      //   console.log(response.data.user._id);
      //   setUserId(response.data.user._id);
      //   console.log(userId);
      const { token, user } = response.data;

      window.localStorage.setItem("token", token);
      window.localStorage.setItem("isActive", true);
      window.localStorage.setItem("userId", user._id);
      setIsLoggedIn(true);
      console.log(token);

      if (response.status === 200) {
        console.log("Successfully Logged In");
        toast.success("Login Successful");
      }
      navigate("/");
    } catch (error) {
      console.error("Error in login:", error.message);
      toast.error("Please Enter Correct Details");
    }
  }

  // Profile INfo
  // useEffect(() => {
  //   if (active && userId) {
  //     async function fetchProfile() {
  //       try {
  //         const response = await axios.get(
  //           `${BASE_URL}/protected/profile/${userId}`,
  //           {
  //             headers: {
  //               authorization: localStorage.getItem("token"),
  //             },
  //           }
  //         );
  //         setProfileInfo(response.data.data);
  //         setProfileLoading(false);
  //       } catch (error) {
  //         console.log("error fetching profile", error);
  //       }
  //     }
  //     setProfileLoading(true);
  //     fetchProfile();
  //   }
  // }, [active, userId]);

  const value = {
    userId,
    loginFormData,
    setloginFormData,
    loginSubmitHandler,
    isLoggedIn,
    setIsLoggedIn,
    profilePhoto,
    setProfilePhoto,

    // loading,
    // setLoading,
    // page,
    // setPage,
    // totalPages,
    // setTotalPages,
    // fetchBlogPosts,
    // handlerPageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
