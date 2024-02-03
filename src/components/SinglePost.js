import React from "react";

function SinglePost({ imageUrl }) {
  return (
    <div className="w-36 h-36 overflow-hidden">
      <img src={imageUrl} alt="" />
    </div>
  );
}

export default SinglePost;
