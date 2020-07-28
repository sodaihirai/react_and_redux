import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => (value === "english" ? "submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  };
  render() {
    return <ColorContext>{(value) => this.renderButton(value)}</ColorContext>;
  }
}

export default Button;
