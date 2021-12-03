import React, { Component } from "react";
import { Radio } from "antd";

export class Size extends Component {
  render() {
    return (
      <div>
        <div>
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group defaultValue="a" size="small">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

export default Size;
