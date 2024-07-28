import React, { useEffect, useState } from "react";
import styles from "./ProjectSection.module.css";
import axios from "axios";
import ProjectCards from "./ProjectCards";

function ProjectSection() {
  const [projects, setProjects] = useState([]); // State to hold project data

  // Fetch project data from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:3000/projects") // Endpoint to fetch projects
      .then((res) => setProjects(res.data)) // Update state with fetched data
      .catch((err) => console.log(err)); // Log any errors
  }, []);

  return (
    <div className={styles.projectarea} id="Projects">
      <div className={styles.projectcontent}>
        <div className={styles.projectheading}>
          <h2>Projects</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.projectCard}>
            {/* Map through projects and render ProjectCards component for each */}
            {projects.map((project, id) => (
              <ProjectCards key={id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
