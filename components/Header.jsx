import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

// const catagories = [
//   { name: "Next JS ", slug: "nextjs" },
//   { name: "React JS", slug: "reactjs" },
//   { name: "Vue JS", slug: "vuejs" },
// ];

const Header = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    getCategories().then((newCatagories) => setCatagories(newCatagories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8   ">
      <div className="w-full inline-block border-b border-blue-500 py-8  ">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="text-white font-bold text-4xl cursor-pointer">
              Bloging App
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {catagories.map((catagory, index) => (
            <Link href={`/catagory/${catagory.slug}`} key={index}>
              <span className="md:float-right mt-2 ml-4 align-middle text-white font-semibold cursor-pointer rounded-lg hover:bg-gray-400 hover:text-black p-2 transition-all ">
                {catagory.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
