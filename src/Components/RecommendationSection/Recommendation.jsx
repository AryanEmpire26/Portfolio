import React, { useEffect, useState } from "react";
import styles from "./Recommendation.module.css";
import RecommendationCards from "./RecommendationCards";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Recommendation() {
  // State to store reviews fetched from the API
  const [reviews, setReviews] = useState([]);

  // Effect hook to fetch reviews data from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/recommendations")
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err)); // Log errors to console if any
  }, []);

  // Settings for the Slick Slider
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, // Number of slides to scroll at once
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

      {/* Slider component to display reviews */}
      <div className={styles.recommendContainer}>
        <Slider {...settings}>
          {reviews.map((review, id) => (
            <div key={id} className={styles.recommendCard}>
              {/* Component to render individual recommendation cards */}
              <RecommendationCards review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Recommendation;
