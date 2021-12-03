import React, { Component } from "react";
import { Button, notification } from "antd";

const openNotification = () => {
  const args = {
    message: "Notification Title",
    description:
      "I will never close automatically. I will be close automatically. I will never close automatically.",
    duration: 0
  };
  notification.open(args);
};

export class Duration extends Component {
  render() {
    return (
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    );
  }
}

export default Duration;
