import React from "react";
import styles from "./Skillcard.module.css";

function Skillcard({ skill: { domain, skills } }) {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillInfoContainer}>
        <h3 className={styles.skillTitle}>{domain}</h3>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skillItem}>
            <div className={styles.skillbox}>
              <div className={styles.skillhead}>
                <p className={styles.skillName}>{skill.name}</p>
                <p className={styles.skillProficiency}>
                  {skill.proficiency}%
                </p>
              </div>
              <div className={styles.skillBar}>
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
