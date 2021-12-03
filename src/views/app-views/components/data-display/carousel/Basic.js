import React, { Component } from "react";
import { Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

export class Basic extends Component {
  render() {
    return (
      <Carousel afterChange={onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}

export default Basic;
