import React, { useState } from "react";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 0;
    }
    value = Math.min(Math.max(value, 0), 360); // Ensure value stays between 0 and 360
    setAngle(value);
  };

  const angleToSlider = (angleValue) => {

    if(angleValue == 0){
      return 180;
    }

    return angleValue;
  };

  const handleSliderChange = (e) => {

    setAngle(parseInt(e.target.value));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <input
        type="number"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
      />
      <input
        type="range"
        min="0"
        max="360"
        value={angleToSlider(angle)}
        onChange={handleSliderChange}
      />
      <div id="radioButtons">
        { [0, 45, 60, 90, 180].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="angle"
              value={value}
              checked={angle === value}
              onChange={handleRadioChange}
            />
            {value}°
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;
