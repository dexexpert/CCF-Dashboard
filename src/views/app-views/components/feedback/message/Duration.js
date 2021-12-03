import React, { Component } from "react";
import { message, Button } from "antd";

const success = () => {
  message.success(
    "This is a prompt message for success, and it will disappear in 10 seconds",
    10
  );
};

export class Duration extends Component {
  render() {
    return <Button onClick={success}>Customized display duration</Button>;
  }
}

export default Duration;
