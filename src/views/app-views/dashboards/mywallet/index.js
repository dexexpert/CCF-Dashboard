import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Dropdown, Table, Menu, Tag } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import { withRouter } from 'react-router-dom';
import ccfTokenAbi from './abi/ccf-abi';
import axios from 'axios';
const Web3 = require('web3');
const tokenAddress = "0x76d0C0d1DB8478e5Ed1F5CF8fF6B80121181cff9";

export const DefaultMyWallet = () => {
  const [myBalance, setBalance] = useState(0);
  const [currentPrice, setCurrentPrice] = useState('0');
  const [walletConnected, setWalletState] = useState(false);
  const [currentAccountAddress, setCurrentAccountAddress] = useState('0');
  const MINUTE_MS = 10000;
  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      setWalletState(true);
      return true;
    }
    return false;
  }
  const getAccount = async () => {
    var accounts, account;
    accounts = await window.ethereum.request({ method: 'eth_accounts' });
    account = accounts[0];
    return account;
  }
  const getBalanceValue = async () => {
    const ids = "cross-chain-farming";
    const vs_currencies = "usd";

    await axios.get("https://api.coingecko.com/api/v3/simple/price", { params: { "ids": ids, "vs_currencies": vs_currencies } })
      .then(res => {

        setCurrentPrice(res.data[ids].usd.toString());
      })
      .catch(err => {

        console.log(err);
      });

  }
  const getBalance = userAddress => async () => {
    const provider = new Web3(window.web3.currentProvider);
    var ccfContract = new provider.eth.Contract(ccfTokenAbi, tokenAddress);

    await ccfContract.methods.balanceOf(userAddress).call().then(res => {
      console.log(res);

      setBalance(res);
    }).catch(err => {

      console.log(err);
    });
  };
  const initWallet = async () => {

    await getAccount().then(res => {

      const _currentAccount = res;
      setWalletState(true);

      setCurrentAccountAddress(_currentAccount);
      getBalance(_currentAccount);
      getBalanceValue();
    }).catch(err => {
      console.log(err);

    });
  }
  const clickConnectWallet = () => {
    if (!ethEnabled()) {
      initWallet();
      return true;
    }
    return false;
  }
  useEffect(() => {
    setInterval(() => {

      if ((currentAccountAddress === undefined || currentAccountAddress === '0')) {
        if (currentAccountAddress === undefined)
          setCurrentAccountAddress('0');
        initWallet();
      }
    }, MINUTE_MS);
  });

  return (
    <>
      { (currentAccountAddress === undefined || currentAccountAddress === '0' || walletConnected === false) ? (
        <Row gutter={16} padding>
          <Col xs={32} sm={32} md={32} lg={24}>
            <Row gutter={40}>
              <Col xs={16} sm={16} md={16} lg={16} xl={12} offset={10}>
                <Button type="primary" onClick={clickConnectWallet} >Connect Wallet</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ) :
        (
          <Row gutter={16} padding>
            <Col xs={32} sm={32} md={32} lg={24}>
              <Row gutter={40}>
                <Col xs={16} sm={16} md={16} lg={16} xl={12}>
                  <StatisticWidget
                    title="BALANCE ($CCF)"
                    value={myBalance + " $CCF"}
                    status={0}
                    subtitle='compare to last year(2020)'
                  />
                </Col><Col xs={16} sm={16} md={16} lg={16} xl={12}>
                  <StatisticWidget
                    title="Real Value in $USD"
                    value={Number(myBalance) * Number(currentPrice) + " $USD"}
                    status={0}
                    subtitle='compare to last year(2020)'
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        )
      }
    </>
  )
}


export default withRouter(DefaultMyWallet);
