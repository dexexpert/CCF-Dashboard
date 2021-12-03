import React, { Component } from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export class Noarrow extends Component {
  render() {
    return (
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="This is panel header with arrow icon" key="1">
          <p>{text}</p>
        </Panel>
        <Panel
          showArrow={false}
          header="This is panel header with no arrow icon"
          key="2"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }
}

export default Noarrow;
