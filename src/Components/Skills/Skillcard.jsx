import React from "react";
import styles from "./Skillcard.module.css";

function Skillcard({ skill: { domain, skills } }) {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillInfoContainer}>
        {/* Display the domain name */}
        <h3 className={styles.skillTitle}>{domain}</h3>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillItem}>
            <div className={styles.skillbox}>
              <div className={styles.skillhead}>
                {/* Display skill name and proficiency */}
                <p className={styles.skillName}>{skill.name}</p>
                <p className={styles.skillProficiency}>{skill.proficiency}%</p>
              </div>
              <div className={styles.skillBar}>
                {/* Display skill progress bar */}
                <div
                  className={styles.skillProgress}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillcard;
