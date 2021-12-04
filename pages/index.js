import Head from "next/head";
import Catagories from "../components/Catagories";
// import FeaturedPosts from "../components/FeaturedPosts";
import PostCard from "../components/PostCard";
import PostWidgets from "../components/PostWidgets";
import { getPosts } from "../services";

// const posts = [
//   { title: "The Weeknd", role: "Singer" },
//   { title: "Taylor Swift", role: "pop singer" },
//   { title: "Virat Kohli", role: "cricketer" },
// ];
export default function Home({ posts }) {
  return (
    <div
      className="container lg:mx-auto px-10 mb-8 
     "
    >
      <Head>
        <title>Blog Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidgets />
            <Catagories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
