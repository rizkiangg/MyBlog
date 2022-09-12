import React from "react";

const Author = ({ author }) => {
  return (
    <div className=" bg-black/40 shadow-2xl flex-col flex items-center rounded-lg p-8 mb-8 backdrop-blur">
      <img
        alt={author?.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author?.photo.url}
      />
      <div className="flex-col space-y-5 mt-5">
        <h1 className=" text-white font-semibold text-xl text-center ">{author.name}</h1>
        <p className="text-white  items-center mt-2 text-center">{author.bio}</p>
      </div>
      
    </div>
  );
};

export default Author;
