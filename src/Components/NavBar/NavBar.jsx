import React, { useState } from "react";
import styles from "./NavBar.module.css";
import logoImage from "../../assets/Logo.jpg";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const getOffset = (link) => {
    switch (link) {
      case "Skills":
        return -10;
      case "Projects":
        return -80;
      case "Recommendations":
        return -200;
      case "Contact":
        return 0;
      default:
        return -120;
    }
  };

  const handleLinkClick = (link, id) => {
    setActiveLink(link);
    const offset = getOffset(link);

    if (location.pathname === "/") {
      // Scroll to section if on home page
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: offset,
      });
    } else {
      // Navigate to home page and then scroll to section
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: offset,
        });
      }, 100); // Slight delay to ensure the home page has rendered
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.navItems}>
        {location.pathname === "/" ? (        //if user at home page then only scroll to desired location
          <ScrollLink
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={activeLink === "Home" ? styles.active : ""}
            onClick={() => handleLinkClick("Home", "Home")}
          >
            Home
          </ScrollLink>
        ) : (                               //if user at skills page 
          <RouterLink
            to="/"
            className={activeLink === "Home" ? styles.active : ""}
            onClick={() => handleLinkClick("Home", "Home")}
          >
            Home
          </RouterLink>
        )}
        <RouterLink
          to="/skills"
          className={activeLink === "Skills" ? styles.active : ""}
          onClick={() => handleLinkClick("Skills", "Skills")}
        >
          Skills
        </RouterLink>
        {location.pathname === "/" ? (
          <ScrollLink
            to="Education"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={activeLink === "Education" ? styles.active : ""}
            onClick={() => handleLinkClick("Education", "Education")}
          >
            Education
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            className={activeLink === "Education" ? styles.active : ""}
            onClick={() => handleLinkClick("Education", "Education")}
          >
            Education
          </RouterLink>
        )}
        {location.pathname === "/" ? (
          <ScrollLink
            to="Projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className={activeLink === "Projects" ? styles.active : ""}
            onClick={() => handleLinkClick("Projects", "Projects")}
          >
            Projects
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            className={activeLink === "Projects" ? styles.active : ""}
            onClick={() => handleLinkClick("Projects", "Projects")}
          >
            Projects
          </RouterLink>
        )}
        {location.pathname === "/" ? (
          <ScrollLink
            to="Recommendations"
            spy={true}
            smooth={true}
            offset={-180}
            duration={500}
            className={activeLink === "Recommendations" ? styles.active : ""}
            onClick={() =>
              handleLinkClick("Recommendations", "Recommendations")
            }
          >
            Recommendations
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            className={activeLink === "Recommendations" ? styles.active : ""}
            onClick={() =>
              handleLinkClick("Recommendations", "Recommendations")
            }
          >
            Recommendations
          </RouterLink>
        )}
        {location.pathname === "/" ? (
          <ScrollLink
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={activeLink === "Contact" ? styles.active : ""}
            onClick={() => handleLinkClick("Contact", "Contact")}
          >
            Contact
          </ScrollLink>
        ) : (
          <RouterLink
            to="/"
            className={activeLink === "Contact" ? styles.active : ""}
            onClick={() => handleLinkClick("Contact", "Contact")}
          >
            Contact
          </RouterLink>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
