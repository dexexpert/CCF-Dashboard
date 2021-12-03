import React from "react";
import { Row, Col, Slider } from "antd";

class Playground extends React.Component {
  gutters = {};

  vgutters = {};

  colCounts = {};

  constructor() {
    super();
    this.state = {
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2
    };
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      this.colCounts[i] = value;
    });
  }

  onGutterChange = gutterKey => {
    this.setState({ gutterKey });
  };

  onVGutterChange = vgutterKey => {
    this.setState({ vgutterKey });
  };

  onColCountChange = colCountKey => {
    this.setState({ colCountKey });
  };

  render() {
    const { gutterKey, vgutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = "";
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 6 }}>Horizontal Gutter (px): </span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.gutters).length - 1}
              value={gutterKey}
              onChange={this.onGutterChange}
              marks={this.gutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Vertical Gutter (px): </span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.vgutters).length - 1}
              value={vgutterKey}
              onChange={this.onVGutterChange}
              marks={this.vgutters}
              step={null}
            />
          </div>
          <span style={{ marginRight: 6 }}>Column Count:</span>
          <div style={{ width: "50%" }}>
            <Slider
              min={0}
              max={Object.keys(this.colCounts).length - 1}
              value={colCountKey}
              onChange={this.onColCountChange}
              marks={this.colCounts}
              step={null}
            />
          </div>
        </div>
        <Row gutter={[this.gutters[gutterKey], this.vgutters[vgutterKey]]}>
          {cols}
        </Row>
        <Row gutter={[this.gutters[gutterKey], this.vgutters[vgutterKey]]}>
          {cols}
        </Row>
        <pre>{`<Row gutter={[${this.gutters[gutterKey]}, ${this.vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
        <pre>{`<Row gutter={[${this.gutters[gutterKey]}, ${this.vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
      </div>
    );
  }
}

export default Playground;
