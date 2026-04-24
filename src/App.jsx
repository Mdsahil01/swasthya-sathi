import React, { useState } from "react";
import SymptomChecker from "./components/SymptomChecker";
import PatientForm from "./components/PatientForm";
import NearbyHelp from "./components/NearbyHelp";
import EmergencyButton from "./components/EmergencyButton";
import "./styles/app.css";


function App() {
 const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") !== "light";
 });
  return (
    <div className={darkMode ? "app-container dark" : "app-container light"}>
      <h1>🩺 Swasthya Sathi</h1>
      <p className="subtitle">Rural Health Assistant</p>
      <p className="ai-tag">AI-powered basic health triage system</p>
      <button 
      className="toggle-btn"
      onClick={() => {
      setDarkMode(!darkMode);
      localStorage.setItem("theme", darkMode ? "light" : "dark");
      }}
     >
     {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
     </button>

      <PatientForm />
      <SymptomChecker />
      <NearbyHelp />
      <EmergencyButton />
      <footer className="footer">
  <p>© 2026 Swasthya Sathii</p>
  <p>Created by Mohammed Sahil & Pavan Vastrad</p>
  <p>Built with ❤️ for rural healthcare</p>

  <div className="footer-links">
    <a href="https://github.com/Mdsahil01" target="_blank">GitHub</a>
    <a href="#" target="_blank">LinkedIn</a>
  </div>
</footer>
    </div>
  );
}

export default App;

