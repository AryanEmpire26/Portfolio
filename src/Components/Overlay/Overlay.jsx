import React, { useState } from "react";
import axios from "axios";
import styles from "./Overlay.module.css";

const Overlay = ({ isOpen, onClose, onSkillAdded }) => {
  const initialSkills = Array.from({ length: 5 }, () => ({
    name: "",
    proficiency: "",
  }));
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState(initialSkills);

  if (!isOpen) return null;

  const handleSkillChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], [name]: value };
    setSkills(updatedSkills);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate that at least one skill is filled out and its proficiency level specified
    const hasValidSkill = skills.some(
      (skill) => skill.name && skill.proficiency
    );
    const allFilledSkillsValid = skills.every(
      (skill) => !skill.name || (skill.name && skill.proficiency)
    );

    if (domain && hasValidSkill && allFilledSkillsValid) {
      const newSkill = {
        domain,
        skills: skills.filter((skill) => skill.name && skill.proficiency),
      }; // Filter out empty skills
      axios
        .post("http://localhost:3000/domains", newSkill)
        .then(() => {
          onSkillAdded();
          onClose();
          setDomain(""); // Clear form inputs
          setSkills(initialSkills); // Reset skills
        })
        .catch((err) => console.error(err));
    } else {
      alert(
        "Please fill in the domain and ensure all specified skills have their proficiency levels."
      );
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent}>
        <h2 className={styles.headtxt}>Add Skill</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formtitle}>
            <label htmlFor="domain" className={styles.domaintxt}>
              Domain
            </label>
            <input
              className={styles.domaininp}
              type="text"
              id="domain"
              value={domain}
              placeholder="Front End Developer"
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div className={styles.skillhead}>
            <h3 className={styles.titletxt}>Skills</h3>
            <div className={styles.skillGroup}>
              <div className={styles.skillColumn}>
                <label>
                  <h4 className={styles.skillLabel}>Skill</h4>
                </label>
                {skills.map((skill, index) => (
                  <input
                    key={`skill-${index}`}
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, e)}
                    className={styles.skillInput}
                  />
                ))}
              </div>
              <div className={styles.skillColumn}>
                <label>
                  <h4 className={styles.skillLabel}>Proficiency(%)</h4>
                </label>
                {skills.map((skill, index) => (
                  <input
                    key={`proficiency-${index}`}
                    type="number"
                    name="proficiency"
                    value={skill.proficiency}
                    onChange={(e) => handleSkillChange(index, e)}
                    min="0"
                    max="100"
                    className={styles.proficiencyInput}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <button type="submit" className={styles.addButton}>
              <h6>Add Skill</h6>
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              <h7>Cancel</h7>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Overlay;
