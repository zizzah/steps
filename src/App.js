import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <ChangeTime />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen + "  the initail value");
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  function handleOpen() {
    setIsOpen((s) => !s);
    console.log(isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            step {step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className="previous"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="next"
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ChangeTime() {
  const [num, setnum] = useState(0);
  const [increase, setIncrease] = useState(1);
  const date = new Date(" 31 july 2023");
  date.setDate(date.getDate() + increase);

  function handleIncrease() {
    setnum((num) => num + 1);
  }
  function handleDecrease() {
    setnum((num) => num - 1);
  }
  function handleNum() {
    setIncrease((num) => num + 1);
  }
  function handleDeNum() {
    setIncrease((num) => num - 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleDeNum}>-</button>
        <span> STEPS </span>

        <button onClick={handleNum}>+</button>
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        <span> COUNT </span>

        <button onClick={handleIncrease}>+</button>
      </div>
      <p>
        {num === 0 ? (
          <span>{date.toDateString()}</span>
        ) : num > 0 ? (
          <span>
            {" "}
            {num} days from is {date.toDateString()}
          </span>
        ) : (
          <span>
            {Math.abs(num)} days ago is {date.toDateString()}{" "}
          </span>
        )}
      </p>
    </div>
  );
}

export default App;
