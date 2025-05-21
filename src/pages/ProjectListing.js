import { useDispatch, useSelector } from "react-redux";
import Projects from "../components/Projects";
import { useEffect } from "react";
import { fetchProjects } from "../features/project/projectSlice";

function ProjectListing() {
  const dispatch = useDispatch();
  const { status, error, projects } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="py-5 status">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="py-5 status">
        <p className="text-center">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-5">
      {projects.length > 0 ? (
        <Projects projects={projects} />
      ) : (
        <p className="text-center">No project found.</p>
      )}
    </div>
  );
}

export default ProjectListing;
