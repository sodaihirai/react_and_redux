// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: 'click me'};
  const label = 'Enter name:'
  return (
    <div>
      <label className="label" htmlFor="name">
        {label}
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screnn
ReactDOM.render(<App />, document.querySelector("#root"));
