import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  // console.log(post);
  return (
    <div className="bg-white mb-5 p-2 md:p-3 lg:p-4   shadow-lg rounded-lg">
      <div>
        <img
          src={post.featuredimage.url}
          alt="image"
          className="rounded-xl object-cover  w-full mb-7 transition hover:scale-105 duration-500 ease-out "
        />
      </div>
      <h1 className="transition duration-200 text-center cursor-pointer text-2xl font-bold hover:text-pink-600 mb-10">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt="profile_img"
            className="align-middle rounded-full "
            height="30px"
            width="30px"
            src={post.author.photo?.url}
          />
          <p className=" inline align-middle text-gray-600 text-lg ml-3">
            {post.author.name}
          </p>
        </div>

        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline ml-2  text-pink-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD YYYY")}
          </span>
        </div>
      </div>
      <p>{post.excerpt}</p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-200 transform  hover:-translate-y-1 bg-pink-500 inline-block text-lg px-4 py-3 rounded-full text-white font-medium">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
