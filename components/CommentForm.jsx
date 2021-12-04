import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

const CommentForm = ({ slug }) => {
  const [localStorage, setLocalStorage] = useState(null);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    });
  };
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg  mb-8 pb-12 ">
      <h1 className="text-xl border-b mb-8 font-semibold p-4">CommentForm</h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className=" p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          type="text"
          className=" py-4 px-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          ref={emailEl}
          className=" px-4 py-4  outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && <p className="text-red-500 text-sm">All Field are required</p>}
      <div className="grid grid-cols-1 mb-4 gap-4 ">
        <div className="">
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            value="true"
            name="storeData"
          />
          <label
            className="text-gray-600 cursor-pointer ml-2 text-xs"
            htmlFor="storeData ml-2"
          >
            Save the information for next comment
          </label>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease-out hover:bg-indigo-600 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer "
        >
          Comment
        </button>

        {showSuccessMessage && (
          <span className="text-green-500  font-semibold  text-sm">
            Comment Submitted
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
