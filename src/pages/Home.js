import React from "react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

function Home() {
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
