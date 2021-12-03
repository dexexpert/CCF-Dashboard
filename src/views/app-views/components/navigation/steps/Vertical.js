import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

class Vertical extends React.Component {
  render() {
    return (
      <Steps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    );
  }
}

export default Vertical;
