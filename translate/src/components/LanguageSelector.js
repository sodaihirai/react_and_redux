import React from "react";

const LanguageSelector = ({ onClick }) => {
  return(
    <div>
      Select a language:
      <i
        className="gb uk flag"
        onClick={() => onClick("english")}
      ></i>
      <i
        className="nl flag"
        onClick={() => onClick("dutch")}
      ></i>
    </div>
  );
};

export default LanguageSelector;
