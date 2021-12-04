import React from "react";
import Image from "next/image";
const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-4 p-8 rounded-lg bg-black bg-opacity-30">
      <div className=" relative ">
        <Image
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio} </p>
    </div>
  );
};

export default Author;
