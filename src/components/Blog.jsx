import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactCard from "./ContactCard";

function Blogs({ blogs }) {
  return (
    <section id="blogs" className="py-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Blogs</h2>
        <p className="text-muted-foreground mb-8">
          Dive into articles and insights on web development, design, and more.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.length > 0 ? (
            blogs
              .slice()
              .reverse()
              .map((blog, index) => (
                <Card key={index} className="flex flex-col h-full shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl ">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3 flex-grow">
                    <p className="text-sm text-muted-foreground ">
                      {blog.blogDescription}
                    </p>

                    <div className="mt-auto flex  gap-3 pt-4">
                      <a
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>Read Blog</Button>
                      </a>
                      {blog.githubLink && (
                        <Link
                          to={blog.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline">View Source</Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h4 className="text-xl font-semibold">No Blogs Available</h4>
              <p className="text-muted-foreground">
                Check back later for new articles!
              </p>
            </div>
          )}
        </div>
      </div>
      <ContactCard />
    </section>
  );
}

export default Blogs;
