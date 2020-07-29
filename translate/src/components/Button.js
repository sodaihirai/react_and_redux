import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        {this.context.language === "english" ? "submit" : "Voorleggen"}
      </button>
    );
  };
  render() {
    return <ColorContext>{(value) => this.renderButton(value)}</ColorContext>;
  }
}

export default Button;
