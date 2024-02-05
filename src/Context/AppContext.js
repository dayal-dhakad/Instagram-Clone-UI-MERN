import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
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
      setUserId(user._id);
      localStorage.setItem("token", token);
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

  // Handle When Next and Previous button are clicked

  const value = {
    userId,
    setUserId,
    loginFormData,
    setloginFormData,
    loginSubmitHandler,
    isLoggedIn,
    setIsLoggedIn,

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
