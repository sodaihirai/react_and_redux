import React from "react";
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends React.Component {
  static contextType = LanguageContext

  render() {
    return(
      <div>
        Select a language:
        <i
          className="gb uk flag"
          onClick={() => this.context.onLanguageChange('english')}
        ></i>
        <i
          className="nl flag"
          onClick={() => this.context.onLanguageChange('dutch')}
        ></i>
      </div>
    );
  }
};

export default LanguageSelector;
