import React, { Component } from "react";
import { Radio } from "antd";

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

export class Radiobutton extends Component {
  render() {
    return (
      <div>
        <div>
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b" disabled>
              Shanghai
            </Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: 16 }}>
          <Radio.Group disabled onChange={onChange} defaultValue="a">
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

export default Radiobutton;
