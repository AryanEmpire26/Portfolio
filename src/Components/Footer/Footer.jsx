import React from "react";
import styles from "./Footer.module.css";
import rectimg1 from "../../assets/Rectangle 97.jpg";
import rectimg2 from "../../assets/Group 270.jpg";
import rectimg3 from "../../assets/Rectangle 100.png";
import limg from '../../assets/Limg.jpg';
import iimg from '../../assets/Iimg.jpg';
import fimg from '../../assets/Fimg.jpg';
import righticon from "../../assets/Copyright Circle.jpg"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoimg}>
        <div className={styles.logo1}></div>
        <div className={styles.logo2}></div>
        <div className={styles.logo3}></div>
        <div className={styles.logo4}></div>
      </div>
      <div className={styles.footercontent}>
        <div className={styles.imgcontainer}></div>
        <div className={styles.contentbox}>
          <div className={styles.content1}>
            <div className={styles.img1box}>
              <img src={rectimg1} alt="" className={styles.img1} />
              <p className={styles.imgtext}>4.5/5 rating on Lorem </p>
            </div>
            <div className={styles.img2box}>
              <img src={rectimg2} alt="" className={styles.img1} />
              <p className={styles.imgtext}>9/10 rating on Ipsum </p>
            </div>
            <div className={styles.img3box}>
              <img src={rectimg3} alt="" className={styles.img1} />
              <p className={styles.imgtext}> 4.5/5 Rating On Dorel</p>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.linksbox}>
              <h2 className={styles.linkhead}>Quick Links</h2>
              <ul className={styles.linklist}>
                <li className={styles.linkitem}>Home</li>
                <li className={styles.linkitem}>Skills</li>
                <li className={styles.linkitem}>Education</li>
                <li className={styles.linkitem}>Projects</li>
                <li className={styles.linkitem}>Recomendations</li>
              </ul>
            </div>
            <div className={styles.portfoliobox}>
              <h2 className={styles.linkhead}>Portfolio</h2>
              <ul className={styles.linklist}>
                <li className={styles.linkitem}>Frontend Development</li>
                <li className={styles.linkitem}>Backend Development</li>
                <li className={styles.linkitem}>Website Design</li>
                <li className={styles.linkitem}>Machine Learning</li>
                <li className={styles.linkitem}>Problem Solving & DSA</li>
              </ul>
            </div>
            <div className={styles.connectbox}>
              <h2 className={styles.linkhead}>Connect</h2>
              <div className={styles.icons}>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={limg} alt="LinkedIn" className={styles.img1} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iimg} alt="Instagram" className={styles.img1} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fimg} alt="Facebook" className={styles.img1} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <img src={righticon} alt="" className={styles.cricon} />
        <p className={styles.crtext}>2024 Copyright, All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
