import React, { useState } from "react";

function PatientForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="card">
      <h2>👤 Patient Info</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {name && age && (
        <p className="info">
          Patient: {name} ({age} yrs)
        </p>
      )}
    </div>
  );
}

export default PatientForm;
