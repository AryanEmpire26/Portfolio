import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCards.module.css";

function ProjectCards({ project: { title, imagesrc, description, skills } }) {
  return (
    <div className={styles.projectContainer}>
      <img
        src={getImageUrl(imagesrc)}
        alt={title}
        className={styles.projectImg}
      />
      <div className={styles.projectInfoContainer}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDesc}>{description}</p>
        <ul className={styles.projectSkills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.projectSkill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCards;
