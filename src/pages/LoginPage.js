import React from "react";
import LoginForm from "../components/LoginForm";
import instaLogo from "../assets/instagram.png";
import metaLogo from "../assets/metaLogo.png";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 ... ">
      <p className="text-center text-sm p-2">English (UK)</p>
      <div className="w-14  mx-auto mt-16 mb-16">
        <img src={instaLogo} alt="" />
      </div>
      <div>
        <LoginForm />
      </div>

      <div className="w-16 mx-auto m-2">
        <img src={metaLogo} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
