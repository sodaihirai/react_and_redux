import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  render() {
    return (
      <div>
        <h3>Create stream</h3>
        <StreamForm action={this.props.createStream} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
