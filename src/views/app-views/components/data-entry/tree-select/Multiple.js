import React, { Component } from "react";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

export class Multiple extends Component {
  state = {
    value: undefined
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="my leaf" />
            <TreeNode value="leaf2" title="your leaf" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

export default Multiple;
