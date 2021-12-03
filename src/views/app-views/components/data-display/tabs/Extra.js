import React, { Component } from "react";
import { Tabs, Button } from "antd";

const { TabPane } = Tabs;

const operations = <Button>Extra Action</Button>;

export class Extra extends Component {
  render() {
    return (
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </Tabs>
    );
  }
}

export default Extra;
