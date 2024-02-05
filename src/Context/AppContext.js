import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [profileInfo, setProfileInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);

  const [loginFormData, setloginFormData] = useState({
    username: "",
    password: "",
  });

  const active = window.localStorage.getItem("isActive");

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
      setUserId(user._id);
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("isActive", true);
      setIsLoggedIn(true);
      console.log(token);

      if (response.status === 200) {
        console.log("Successfully Logged In");
      }
      navigate("/");
    } catch (error) {
      console.error("Error in login:", error.message);
    }
  }

  console.log(userId);
  // Profile INfo
  useEffect(() => {
    if (isLoggedIn) {
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
        } catch (error) {
          console.log("error fetching profile", error);
        }
      }
      fetchProfile();
    }
  }, [isLoggedIn, userId]);

  const value = {
    userId,
    setUserId,
    loginFormData,
    setloginFormData,
    loginSubmitHandler,
    isLoggedIn,
    setIsLoggedIn,
    profileInfo,
    setProfileInfo,
    profileLoading,

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
