import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidgets = ({ slug, categories }) => {
  const [releatedPosts, setReleatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setReleatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setReleatedPosts(result));
    }
  }, []);
  // console.log(releatedPosts);
  return (
    <div className="bg-white rounded-lg shadow-lg  p-8 mb-8">
      <h3 className="text-xl font-semibold border-b pb-4 border-gray-700">
        {slug ? "Similar Posts" : "Recent Posts"}
      </h3>

      {releatedPosts.map((post, index) => (
        <div className="flex items-center w-full mb-4 mt-2" key={index}>
          <div className="w-16 flex-none">
            <img
              width="60px"
              height="60px"
              className="align-middle rounded-full"
              src={post.featuredimage.url}
              alt={post.title}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-light text-xs">
              {moment(post.createdAt).format("MMMM Do YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidgets;
