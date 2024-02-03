import React from "react";
import LoadingImg from "../assets/Loading.jpg";

const Loading = () => {
  return (
    <div className="">
      <img className="h-[100vh] w-[100vw]" src={LoadingImg} alt="" />
    </div>
  );
};

export default Loading;
