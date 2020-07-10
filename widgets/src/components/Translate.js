import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Translate = () => {
  const options = [
    {
      label: "Spanish",
      value: "spanish",
    },
    {
      label: "English",
      value: "english",
    },
    {
      label: "Japanese",
      value: "japanese",
    },
  ];

  const [term, setTerm] = useState("");
  const [language, setLanguage] = useState(options[0]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSelectedChange = (option) => {
    setLanguage(option);
  }

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => onInputChange(e)}
          />
        </div>
      </div>
      <div>
        <Dropdown options={options} selected={language} onSelectedChange={onSelectedChange}/>
      </div>
    </div>
  );
};

export default Translate;
