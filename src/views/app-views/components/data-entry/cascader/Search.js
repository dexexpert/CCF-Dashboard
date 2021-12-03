import React, { Component } from "react";
import { Cascader } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          },
          {
            value: "xiasha",
            label: "Xia Sha",
            disabled: true
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua men"
          }
        ]
      }
    ]
  }
];

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return path.some(
    option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}

export class Search extends Component {
  render() {
    return (
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch={{ filter }}
      />
    );
  }
}

export default Search;
