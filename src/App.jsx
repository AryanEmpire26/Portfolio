import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Recommendation from "./Components/RecommendationSection/Recommendation";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills"; // Import the Skills page component

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
        {/* Add Skills page route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
