import React from "react";

function EmergencyButton() {
  const handleEmergency = () => {
  window.location.href = "tel:108";
};
  return (
    <div className="card">
      <h2>🚨 Emergency</h2>
      <button className="emergency-btn" onClick={handleEmergency}>
        Call 108
      </button>
    </div>
  );
}

export default EmergencyButton;
