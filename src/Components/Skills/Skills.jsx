import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Skills.module.css";
import Skillcard from "./Skillcard.jsx";
import Overlay from "../Overlay/Overlay.jsx";

function Skills() {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [skills, setSkills] = useState([]); // State to hold the list of skills
  const [isOverlayOpen, setOverlayOpen] = useState(false); // State to control the visibility of the overlay

  // Fetch skills data from the API when the component mounts
  useEffect(() => {
    fetchSkills();
  }, []);

  // Function to fetch skills from the API
  const fetchSkills = () => {
    axios
      .get("http://localhost:3000/domains") // API endpoint for fetching skills
      .then((res) => setSkills(res.data)) // Update state with fetched skills
      .catch((err) => console.log(err)); // Log any errors
  };

  // Open the overlay for adding a new skill
  const openOverlay = () => setOverlayOpen(true);

  // Close the overlay
  const closeOverlay = () => setOverlayOpen(false);

  return (
    <div className={styles.container} id="Skills">
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.titletxt}>Skills & Languages</h2>
          <p className={styles.paratxt}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className={styles.Skillscontainer}>
          <div className={styles.Skillsbox}>
            {skills.map((skill, id) => {
              return <Skillcard key={id} skill={skill} />; // Render Skillcard components for each skill
            })}
          </div>
        </div>
        <button className={styles.addSkillButton} onClick={openOverlay}>
          <h4 className={styles.btntxt}>Add Skill</h4>
        </button>
      </div>
      <Overlay
        isOpen={isOverlayOpen} 
        onClose={closeOverlay} 
        onSkillAdded={fetchSkills} // Refetch skills when a new skill is added
      />
    </div>
  );
}

export default Skills;
