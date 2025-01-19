import React from "react";
import Blog from "../components/Blog";

function BlogPage() {
  const mockBlogs = [
    { title: "blog 1", link: "/" },
    { title: "blog 2", link: "/" },
    { title: "blog 3", link: "/" },
  ];

  return (
    <div className="py-5 bg-light">
      <Blog blogs={mockBlogs} />
    </div>
  );
}

export default BlogPage;
