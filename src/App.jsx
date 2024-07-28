import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Recommendation from "./Components/RecommendationSection/Recommendation";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills"; 
/**
 * Main App component that sets up the routing for the application.
 * 
 * This component uses React Router to define the routes and components 
 * for different pages of the app. It includes:
 * - A navigation bar (NavBar) that appears on all pages.
 * - A footer (Footer) that appears on all pages.
 * - Routes for the home page ("/") which includes HeroSection, ProjectSection, 
 *   Recommendation, and ContactSection.
 * - A separate route for the Skills page ("/skills") which displays the Skills component.

 */
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProjectSection />
              <Recommendation />
              <ContactSection />
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
