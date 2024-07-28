import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./RecommendationCards.module.css";

function RecommendationCards({
  review: {
    ratingimg,
    title,
    description,
    profilePhoto,
    profileName,
    profileJob,
  },
}) {
  return (
    <div className={styles.content}>
      {/* Review section containing rating image, title, and description */}
      <div className={styles.review}>
        <img src={getImageUrl(ratingimg)} alt={title} className={styles.rimg} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Info section containing profile photo and profile details */}
      <div className={styles.infocontainer}>
        <img
          src={getImageUrl(profilePhoto)}
          alt={profileName}
          className={styles.propimg}
        />
        <div className={styles.profileInfo}>
          <h4 className={styles.profileName}>{profileName}</h4>
          <p className={styles.profileJob}>{profileJob}</p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCards;
