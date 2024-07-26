import React, { useEffect, useState } from "react";
import styles from "./Recommendation.module.css";
import RecommendationCards from "./RecommendationCards";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendation() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recommendations")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container} id="Recommendations">
      <div className={styles.heading}>
        <h2>Recommendations</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className={styles.recommendContainer}>
        <Slider {...settings}>
          {reviews.map((review, id) => (
            <div key={id} className={styles.recommendCard}>
              <RecommendationCards review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Recommendation;
