import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const images = [
    "https://freepngimg.com/thumb/numbers/129927-1-number-png-file-hd.png",
    "https://freepngimg.com/thumb/numbers/129883-picture-2-number-download-hd.png",
    "https://freepngimg.com/thumb/numbers/129826-picture-3-number-free-clipart-hq.png"
  ];

  useEffect(() => {
    // console.log("Current Value:", currentValue);
  }, [currentValue]);

  function handleNext() {
    if (currentValue < images.length - 1) {
      // console.log("Current Value before Next:", currentValue);
      setCurrentValue(currentValue + 1);
    } else {
      setCurrentValue(0);
    }
  }

  function handlePrev() {
    if (currentValue === 0) {
      setCurrentValue(images.length - 1); // Set to the last image when currentValue is 0
    } else {
      setCurrentValue(currentValue - 1); // Decrement currentValue by 1 for other cases
    }
  }

  return (
    <div className="App">
      <h2> hello this is my world </h2>
      <h1> hello world!</h1>
      <header className="container">
        <button onClick={handlePrev}>Previous</button>

        <img
          style={{ height: "100px", width: "100px" }}
          src={images[currentValue]}
          alt=""
        />

        <button onClick={handleNext}>Next</button>
      </header>
    </div>
  );
}
