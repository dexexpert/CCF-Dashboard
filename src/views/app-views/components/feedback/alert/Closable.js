import React, { Component } from "react";
import { Alert } from "antd";

const onClose = e => {
  console.log(e, "I was closed.");
};

export class Closable extends Component {
  render() {
    return (
      <div>
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
          onClose={onClose}
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable
          onClose={onClose}
        />
      </div>
    );
  }
}

export default Closable;
