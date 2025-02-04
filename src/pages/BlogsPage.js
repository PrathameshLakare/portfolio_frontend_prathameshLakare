import React, { useEffect } from "react";
import Blog from "../components/Blog";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../features/blog/blogSlice";

function BlogPage() {
  const dispatch = useDispatch();
  const { status, error, blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="py-5 bg-light">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="py-5 bg-light">
        <p className="text-center">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-5 bg-light">
      {blogs.length > 0 ? (
        <Blog blogs={blogs} />
      ) : (
        <p className="text-center">No blogs found.</p>
      )}
    </div>
  );
}

export default BlogPage;
