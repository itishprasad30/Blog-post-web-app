import React from "react";
import Catagories from "../../components/Catagories";
import CommentForm from "../../components/CommentForm";
import Author from "../../components/Author";
import Comments from "../../components/Comments";
import PostDetail from "../../components/PostDetail";
import PostWidgets from "../../components/PostWidgets";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  // console.log(post);
  return (
    <div className="container lg:mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="lg:sticky relative top-8">
            <PostWidgets
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Catagories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };
}
