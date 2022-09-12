import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  let router = useRouter();

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result.edges);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result.edges);
      });
    }
  }, [slug]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className=" text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts?.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.node.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={post.node.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4 cursor-pointer">
            <div
              onClick={() => router.push(`/post/${post.node.slug}`)}
              key={post.node.slug}
              className="text-base capitalize flex flex-col"
            >
              {post.node.title}
              <span className="text-gray-500 font-extralight ">
                {moment(post.node.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
