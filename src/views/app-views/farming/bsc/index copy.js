import React, { useState, useEffect } from "react";

import { Tabs, Button, Modal } from 'antd';
import {
  WalletOutlined
} from '@ant-design/icons'

import PortfolioPane from './Portfolio';
import HistoryPane from './History';

const Web3 = require('web3');

const { TabPane } = Tabs;

const Demo = () => {
  const [walletDisconnected, setWalletDisconnectionState] = useState(true);
  const [walletUnavailable, setWalletUnavailable] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentAccountAddress, setCurrentAccountAddress] = useState('0');

  const clickConnectWallet = () => {
    if (typeof web3 === 'undefined') {
      setWalletUnavailable(true);
      return;
    }
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(res => {
      window.web3 = new Web3(window.ethereum);
      console.log(window.web3);
      setWalletDisconnectionState(false);
    }).catch(err => {
      setWalletDisconnectionState(true);
      console.log(err);
    });
  }

  const getAccount = async () => {
    var accounts, account;
    accounts = await window.ethereum.request({ method: 'eth_accounts' });
    account = accounts[0];
    return account;
  }

  useEffect(() => {
    if (typeof web3 === 'undefined') {
      setWalletUnavailable(true);
    }
    else {
      setWalletUnavailable(false);
      getAccount().then(res => {
        if (res === undefined)
          return;
        setCurrentAccountAddress(res);
        setWalletDisconnectionState(false);
      }).catch(err => console.log(err));
    }
  }, []);

  useEffect(() => {
    console.log(currentAccountAddress);
  }, [currentAccountAddress]);

  useEffect(() => {
    if (walletUnavailable === true)
      setAlertVisible(true);
    else
      setAlertVisible(false);
  }, [walletUnavailable]);

  const operations = <Button icon={<WalletOutlined />} type="primary" disabled={walletUnavailable} onClick={clickConnectWallet}>Connect Wallet</Button>;

  return (
    <>
      {alertVisible === true ? (
        Modal.warning({ title: "Metamask info", content: "Without metamask this page can't show information." }),
        setAlertVisible(false))
        : null}
      <Tabs size="large" tabBarExtraContent={(walletDisconnected === true ? operations : null)}>
        <TabPane tab="Overview" key="1">
          Welcome to BSC Farming page.
        </TabPane>
        <TabPane tab="Portfolio" disabled={walletDisconnected} key="2">
          <PortfolioPane accountAddress={currentAccountAddress} />
        </TabPane>
        <TabPane tab="History" disabled={walletDisconnected} key="3">
          <HistoryPane accountAddress={currentAccountAddress} />
        </TabPane>
      </Tabs>
    </>
  );
};
export default Demo;