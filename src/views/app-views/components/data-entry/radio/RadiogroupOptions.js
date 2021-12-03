import React, { Component } from "react";
import { Radio } from "antd";

const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];

export class RadiogroupOptions extends Component {
  state = {
    value1: "Apple",
    value2: "Apple",
    value3: "Apple"
  };

  onChange1 = e => {
    console.log("radio1 checked", e.target.value);
    this.setState({
      value1: e.target.value
    });
  };

  onChange2 = e => {
    console.log("radio2 checked", e.target.value);
    this.setState({
      value2: e.target.value
    });
  };

  onChange3 = e => {
    console.log("radio3 checked", e.target.value);
    this.setState({
      value3: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Radio.Group
          options={plainOptions}
          onChange={this.onChange1}
          value={this.state.value1}
        />
        <Radio.Group
          options={options}
          onChange={this.onChange2}
          value={this.state.value2}
        />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={this.onChange3}
          value={this.state.value3}
        />
      </div>
    );
  }
}

export default RadiogroupOptions;
