import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "453501033120-8pqfmpb99dff0je53n9prrmu9vab4s80.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>I dont konw if we are signed in</div>;
    } else if (this.props.isSignedIn === true) {
      return (
        <div>
          <button className="ui red google button" onClick={this.onSignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  onSignInClick = () => {
    this.props.signIn()
  };

  onSignOutClick = () => {
    this.props.signOut()
  };

  render() {
    return (
      <div>
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth);
