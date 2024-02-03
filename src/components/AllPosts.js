import React from "react";
import profileData from "../profileData";
import SinglePost from "./SinglePost";

function AllPosts() {
  console.log(profileData.posts);

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {profileData.posts.map((post) => {
        return <SinglePost imageUrl={Object.values(post)[0]} />;
      })}
    </div>
  );
}

export default AllPosts;
