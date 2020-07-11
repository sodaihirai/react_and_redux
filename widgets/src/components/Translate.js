import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [term, setTerm] = useState("");
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            className="input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Dropdown
          label="select language"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>
      <Convert language={language.value} term={term} />
    </div>
  );
};

export default Translate;
