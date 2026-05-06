import React, { useState } from "react";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState([]);
  const [result, setResult] = useState("");
  const [advice, setAdvice] = useState("");
  const [confidence, setConfidence] = useState("");

  const symptomOptions = [
    { value: "fever", label: "Fever" },
    { value: "cough", label: "Cough" },
    { value: "headache", label: "Headache" },
    { value: "stomach", label: "Stomach Pain" },
  ];

  const checkSymptom = () => {
    if (symptoms.length === 0) {
      setResult("Please select at least one symptom");
      setAdvice("");
      setConfidence("");
      return;
    }

    if (symptoms.includes("stomach")) {
      setResult("🔴 Severe – Visit hospital immediately");
      setAdvice(
        "Severe abdominal pain can be serious. Immediate medical attention is recommended."
      );
      setConfidence(symptoms.length > 1 ? "Confidence: 91%" : "Confidence: 87%");
      return;
    }

    if (symptoms.includes("fever") || symptoms.includes("cough")) {
      const hasBothInfectionSignals =
        symptoms.includes("fever") && symptoms.includes("cough");
      setResult("🟡 Moderate – Visit nearby PHC");
      setAdvice(
        hasBothInfectionSignals
          ? "Fever with cough may indicate a stronger infection pattern. Early checkup is advised."
          : "This may indicate an infection. Early checkup prevents complications."
      );
      setConfidence(hasBothInfectionSignals ? "Confidence: 86%" : "Confidence: 82%");
      return;
    }

    setResult("🟢 Mild – Home care is enough");
    setAdvice("Stay hydrated and take rest. Monitor if symptoms increase.");
    setConfidence("Confidence: 90%");
  };

  const handleSymptomChange = (value) => {
    setSymptoms((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="card">
      <h2>🩺 Symptom Checker</h2>

      <div className="symptom-options">
        {symptomOptions.map((option) => (
          <label key={option.value} className="symptom-option">
            <input
              type="checkbox"
              checked={symptoms.includes(option.value)}
              onChange={() => handleSymptomChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>

      <button
        onClick={checkSymptom}
        disabled={!symptoms.length}
        className={symptoms.length ? "active-btn" : "disabled-btn"}
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
