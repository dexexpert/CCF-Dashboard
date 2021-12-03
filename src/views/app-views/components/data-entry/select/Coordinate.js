import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
};

export class Coordinate extends Component {
  state = {
    cities: cityData[provinceData[0]],
    secondCity: cityData[provinceData[0]][0]
  };

  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0]
    });
  };

  onSecondCityChange = value => {
    this.setState({
      secondCity: value
    });
  };

  render() {
    const { cities } = this.state;
    return (
      <div>
        <span className="mr-2">
          <Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={this.handleProvinceChange}
          >
            {provinceData.map(province => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
        </span>
        <span className="mr-2">
          <Select
            style={{ width: 120 }}
            value={this.state.secondCity}
            onChange={this.onSecondCityChange}
          >
            {cities.map(city => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
        </span>
      </div>
    );
  }
}

export default Coordinate;
