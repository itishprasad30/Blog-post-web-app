import axios from "axios";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

import { BadgeCheckIcon, BanIcon } from "@heroicons/react/solid";
const about = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const functioncall = () => {
    const options = {
      method: "POST",
      url: "https://twitter-user-profile-data.p.rapidapi.com/v1/api/twitter",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "twitter-user-profile-data.p.rapidapi.com",
        "x-rapidapi-key": "ea357d7b4emsha4b9851831219bcp1a3439jsn3eb7021ad344",
      },
      data: [input],
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setResult(response.data.data);
    });
    setInput("");
    console.clear();
  };
  // functioncall();
  // console.log(input);
  return (
    <div className="flex flex-col flex-1 justify-center rounded-lg items-center bg-gray-500 max-w-full px-10 ml-20 mr-20">
      <div className=" flex flex-col mb-5 gap-2">
        <p className=" text-xl font-bold  text-gray-900 ">
          {" "}
          Type twitter Name to Search :
        </p>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text "
          placeholder="Type Here "
          className="bg-gray-200 p-3 rounded-full text-2xl text-black"
        />
        <button
          onClick={functioncall}
          className=" text-xl font-semibold p-3 bg-yellow-600 text-black rounded-full "
        >
          Click To Search
        </button>
      </div>
      <div className="text-2xl text-white ">
        {result.map((item, index) => (
          <div key={index}>
            <img
              src={item.profile_banner_url}
              alt="cover_Image"
              className="object-cover h-2/4   rounded-xl"
            />
            <div className="flex flex-row space-x-4 items-center mt-7">
              <img
                src={item.profile_image_url}
                alt="proimg"
                className="h-16 w-16 rounded-full "
              />
              <span>{item.name}</span>
              {item.verified ? (
                <BadgeCheckIcon className="text-blue-600 h-8 w-8" />
              ) : (
                <BanIcon className="text-blue-600 h-8 w-8 " />
              )}
            </div>
            <br />
            <span>Twitter Name : {item.screen_name}</span>
            <br />
            <span>description : {item.description}</span> <br />
            <span> Location : {item.location}</span>
            <br />
            <span>
              Followers :{" "}
              <NumberFormat
                value={item.followers_count}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>
            <br />
            <span>
              Following :{" "}
              <NumberFormat
                value={item.friends_count}
                displayType="text"
                thousandSeparator={true}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
// export async function getStaticProps() {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/comments?postId=1"
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
