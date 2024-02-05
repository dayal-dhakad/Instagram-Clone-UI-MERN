import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
import BASE_URL from "../config";

function Home() {
  const { userId } = useContext(AppContext);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        // const token = localStorage.getItem("token"); // Retrieve token from local storage
        // console.log(token);
        // if (!token) {
        //   console.error("Token is missing");
        //   return;
        // }

        console.log(BASE_URL);

        const response = await axios.get(`${BASE_URL}/home`, {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        });

        if (response.status === 200) {
          console.log("Successfully fetched home data:", response.data.payload);
          // setUserId(response.data.payload.id);
        }
      } catch (error) {
        console.error("Error in home page:", error.message);
      }
    }

    fetchHomeData();
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen ">
      <div>
        <Navbar />
      </div>
      <div>
        <Feed />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
