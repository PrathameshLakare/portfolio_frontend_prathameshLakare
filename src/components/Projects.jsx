import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactCard from "./ContactCard";

function Projects({ projects }) {
  return (
    <section id="projects" className="py-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold  mb-6">Projects</h2>
        <p className=" text-muted-foreground mb-8">
          A showcase of my personal projects, built with passion and creativity.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.length > 0 ? (
            projects
              .slice()
              .reverse()
              .map((project, index) => (
                <Card key={index} className="flex flex-col h-full shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl ">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3 flex-grow">
                    <p className="text-sm text-muted-foreground ">
                      {project.description}
                    </p>

                    {project.tech && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.split(", ").map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex  gap-3 pt-4">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>View Project</Button>
                      </a>
                      <Link
                        to={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline">View Source</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h4 className="text-xl font-semibold">No Projects Available</h4>
              <p className="text-muted-foreground">
                Check back later to see exciting projects!
              </p>
            </div>
          )}
        </div>
      </div>
      <ContactCard />
    </section>
  );
}

export default Projects;
