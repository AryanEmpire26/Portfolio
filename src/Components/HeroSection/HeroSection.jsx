import React from 'react'
import styles from "./HeroSection.module.css"
import ellipseimg from "../../assets/Ellipse 13.jpg"
import ellipseimg2 from "../../assets/Ellipse 12.jpg"
import rectangleimg from "../../assets/Rectangle 51.jpg"
import rectangleimg2 from "../../assets/Rectangle 52.jpg"
import polygonimg from "../../assets/Polygon 1.jpg"
import coderimg from "../../assets/undraw_proud_coder_re_exuy 1.jpg"
function HeroSection() {
  return (
    <div className={styles.hero} id='Home'>
      <img src={ellipseimg} alt="Logo" className={styles.ellipse13Img} />
      <img src={ellipseimg2} alt="Logo" className={styles.ellipse12Img} />
      <img src={rectangleimg} alt="Logo" className={styles.rectangle51img} />
      <img src={rectangleimg2} alt="Logo" className={styles.rectangle52img} />
      <div className={styles.ellipse13Img2}></div>
      <img src={ellipseimg2} alt="Logo" className={styles.ellipse12Img2} />
      <img src={polygonimg} alt="Logo" className={styles.polygon1img} />
      <div className={styles.herocontent}>
        <div className={styles.heroheading}>
          I'm Rayan Adlrdard
          <span className={styles.frontendText}>Front-end</span> Developer
        </div>
        <div className={styles.herotext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </div>

        <button className={styles.hireMeButton}>
          Hire Me <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className={styles.imagecontainer}>
        <img src={coderimg} alt="img" className={styles.coder_img} />
      </div>
    </div>
  );
}

export default HeroSection