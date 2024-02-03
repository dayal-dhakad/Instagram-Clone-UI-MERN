import React from "react";
import Post from "./Post";
import data from "../data";

function Feed() {
  console.log(data);

  return (
    <div className=" overflow-y-auto mt-[65px] mb-[70px]">
      {data.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </div>
  );
}

export default Feed;
