import React from "react";

import { Tabs, } from 'antd';

import PortfolioPane from './Portfolio';
import HistoryPane from './History';

const { TabPane } = Tabs;

const Demo = () => {
  return (
    <>
      <Tabs size="large">
        <TabPane tab="Portfolio" key="2">
          <PortfolioPane accountAddress="0x4199ec8fe98c2b310e93eff56b9c5a03fec83300" />
        </TabPane>
        <TabPane tab="History" key="3">
          <HistoryPane accountAddress="0x4199ec8fe98c2b310e93eff56b9c5a03fec83300" />
        </TabPane>
      </Tabs>
    </>
  );
};
export default Demo;