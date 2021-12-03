import React, { Component } from "react";
import { Mentions } from "antd";

const { Option } = Mentions;

function getOptions() {
  return ["afc163", "zombiej", "yesmeck"].map(value => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Mentions
          style={{ width: "100%" }}
          placeholder="this is disabled Mentions"
          disabled
        >
          {getOptions()}
        </Mentions>
      </div>
      <Mentions
        style={{ width: "100%" }}
        placeholder="this is readOnly Mentions"
        readOnly
      >
        {getOptions()}
      </Mentions>
    </div>
  );
}

export class Readonly extends Component {
  render() {
    return <App />;
  }
}

export default Readonly;
