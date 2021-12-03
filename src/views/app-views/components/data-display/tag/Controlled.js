import React, { Component } from "react";
import { Tag, Button } from "antd";

export class Controlled extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button
          size="small"
          className="mt-2"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          Toggle
        </Button>
      </div>
    );
  }
}

export default Controlled;
