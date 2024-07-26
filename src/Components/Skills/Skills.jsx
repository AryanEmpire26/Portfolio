
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Skills.module.css";
import Skillcard from "./Skillcard.jsx";
import Overlay from "../Overlay/Overlay.jsx";
function Skills() {
  const [skills, setSkills] = useState([]);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = () => {
    axios
      .get("http://localhost:3000/domains")
      .then((res) => setSkills(res.data))
      .catch((err) => console.log(err));
  };
    const openOverlay = () => setOverlayOpen(true);
    const closeOverlay = () => setOverlayOpen(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.titletxt}>Skills & Langauges</h2>
          <p className={styles.paratxt}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </p>
        </div>
        <div className={styles.Skillscontainer}>
          <div className={styles.Skillsbox}>
            {skills.map((skill, id) => {
              return <Skillcard key={id} skill={skill} />;
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
        onSkillAdded={fetchSkills}
      />
    </div>
  );
}

export default Skills;
