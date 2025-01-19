import Projects from "../components/Projects";

function ProjectListing() {
  const mockProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description 1",
      image: "img1.jpg",
      projectLink: "/",
      githubLink: "/",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description 2",
      image: "img2.jpg",
      projectLink: "/",
      githubLink: "/",
    },
  ];

  return (
    <div className="py-5 bg-light">
      <Projects projects={mockProjects} />
    </div>
  );
}

export default ProjectListing;
