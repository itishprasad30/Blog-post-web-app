import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../services";
const Catagories = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    getCategories().then((newCatagories) => setCatagories(newCatagories));
  }, []);
  // console.log(catagories);
  return (
    <div className="bg-white rounded-lg shadow-lg  p-8 mb-8">
      <h3 className="text-xl font-semibold border-b pb-4 border-gray-700">
        Catagories
      </h3>
      {catagories.map((catagory, index) => (
        <Link href={`/catagory/${catagory.slug}`} key={index}>
          <span className="p-3 mb-3 cursor-pointer block">{catagory.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Catagories;
