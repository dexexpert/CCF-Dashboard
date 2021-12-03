import React, { Component } from "react";
import { Button, notification } from "antd";

const key = "updatable";

const openNotification = () => {
  notification.open({
    key,
    message: "Notification Title",
    description: "description."
  });
  setTimeout(() => {
    notification.open({
      key,
      message: "New Title",
      description: "New description."
    });
  }, 1000);
};

export class Update extends Component {
  render() {
    return (
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    );
  }
}

export default Update;
