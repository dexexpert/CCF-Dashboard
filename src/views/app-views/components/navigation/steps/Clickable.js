import React from "react";
import { Steps, Divider } from "antd";

const { Step } = Steps;

class Clickable extends React.Component {
  state = {
    current: 0
  };

  onChange = current => {
    console.log("onChange:", current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <div>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>

        <Divider />

        <Steps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>
      </div>
    );
  }
}

export default Clickable;
