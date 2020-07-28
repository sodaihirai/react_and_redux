import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector"

class App extends React.Component {
  state = { language: "english" };

  onClickFlag = (language) => {
    this.setState({ language: language })
  }

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onClick={this.onClickFlag} />
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
