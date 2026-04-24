import React, { useState } from "react";

function SymptomChecker() {
  const [symptom, setSymptom] = useState("");
const [result, setResult] = useState("");
const [advice, setAdvice] = useState("");
const [confidence, setConfidence] = useState("");

  const checkSymptom = () => {
  if (symptom === "fever" || symptom === "cough") {
    setResult("🟡 Moderate – Visit nearby PHC");
    setAdvice("This may indicate an infection. Early checkup prevents complications.");
    setConfidence("Confidence: 82%");
  } 
  else if (symptom === "headache") {
    setResult("🟢 Mild – Home care is enough");
    setAdvice("Stay hydrated and take rest. Monitor if symptoms increase.");
    setConfidence("Confidence: 90%");
  } 
  else if (symptom === "stomach") {
    setResult("🔴 Severe – Visit hospital immediately");
    setAdvice("Severe abdominal pain can be serious. Immediate medical attention is recommended.");
    setConfidence("Confidence: 87%");
  } 
  else {
    setResult("Please select a symptom");
    setAdvice("");
    setConfidence("");
  }
};

  return (
    <div className="card">
      <h2>🩺 Symptom Checker</h2>

      <select onChange={(e) => setSymptom(e.target.value)}>
        <option value="">Select symptom</option>
        <option value="fever">Fever</option>
        <option value="cough">Cough</option>
        <option value="headache">Headache</option>
        <option value="stomach">Stomach Pain</option>
      </select>

       <button 
       onClick={checkSymptom} 
       disabled={!symptom}
       className={symptom ? "active-btn" : "disabled-btn"}
       >
       Check
       </button>

      {result && <p className="result">{result}</p>}
      {advice && <p className="advice">{advice}</p>}
      {confidence && <p className="confidence">{confidence}</p>}
    </div>
  );
}

export default SymptomChecker;
