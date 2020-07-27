import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "english" };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="gb uk flag"
            onClick={() => this.setState({ language: "english" })}
          ></i>
          <i
            className="nl flag"
            onClick={() => this.setState({ language: "dutch" })}
          ></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
