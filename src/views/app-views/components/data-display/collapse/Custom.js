import React, { Component } from "react";
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: "#f7f7f7",
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden"
};

export class Custom extends Component {
  render() {
    return (
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }
}

export default Custom;
