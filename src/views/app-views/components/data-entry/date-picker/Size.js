import React, { Component } from "react";
import { DatePicker, Radio } from "antd";

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export class Size extends Component {
  state = {
    size: "default"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
}

export default Size;
