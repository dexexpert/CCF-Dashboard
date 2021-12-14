import React, { useState, useEffect } from "react";

import { Row, Table, Col } from 'antd';
import axios from 'axios';

import {
  UserOutlined,
  FileDoneOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'

const FarmingHistory = (props) => {
  const account = props.accountAddress;
  const chainId = props.chainId;
  const [result, setResult] = useState([]);
  const [tokenInfo, setTokenInfo] = useState([]);
  const [projectDict, setProjectDict] = useState([]);

  const columns = [
    {
      title: 'tx_info',
      dataIndex: 'id',
      key: 'tx_info',
      render: (text, record) => {
        const unixTime = Number(record.time_at);
        const date = new Date(unixTime * 1000);
        if (text === undefined || text === null || text.length === 0)
          return null;

        return (
          <>
            <p>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </p>
            <p>
              {text.substr(0, 6) + "...." + text.slice(-4)}
            </p>
          </>);
      }
    },
    {
      title: 'Status',
      dataIndex: 'cate_id',
      key: 'cate_id',
      render: (text, record) => {
        return (
          <>
            <Row gutter={18}>
              <Col xs={5} sm={5} md={5} lg={5} xxl={5}>
                {record.project_id !== null ? (<img width="40px" height="40px" style={{
                  marginRight: "10px",
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)',
                }} src={projectDict[record.project_id].logo_url} alt={record.project_id} />) :
                  text === "approve" ? (<CheckCircleOutlined style={{
                    width: 'fit-content',
                    height: 'fit-content',
                    fontSize: '2.5em',
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginRight: "10px"
                  }} />) : ((text === "send" || text === "receive") ? (<UserOutlined style={{
                    width: 'fit-content',
                    height: 'fit-content',
                    fontSize: '2.5em',
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginRight: "10px"
                  }} />) : (<FileDoneOutlined style={{
                    width: 'fit-content',
                    height: 'fit-content',
                    fontSize: '2.5em',
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginRight: "10px"
                  }} />))
                }

              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xxl={12} gutter={2}>
                {text !== null ? (<p>{text}</p>) : <p>{record.tx.name}</p>}
                <p> {(record.project_id !== undefined && record.project_id !== null) ? projectDict[record.project_id].name : record.other_addr.substr(0, 6) + "..." + record.other_addr.slice(-4)}</p>
              </Col>
            </Row>
          </>
        );
      }
    },
    {
      title: 'info',
      dataIndex: 'info',
      key: 'info',
      render: (text, record) => {
        let showDataReceives = (<></>), showDataSends = (<></>);
        if (record['receives'].length !== 0) {
          showDataReceives = (
            <>
              {record['receives'].map(receiveTx => {
                const myTokenInfo = tokenInfo[receiveTx.token_id];
                const tokenSymbol = ((myTokenInfo === undefined) ? (null) : (myTokenInfo.symbol));
                const tokenUrl = ((myTokenInfo === undefined) ? ("/img/coin-default.b2295297.svg") : (myTokenInfo.logo_url === null ? "/img/coin-default.b2295297.svg" : myTokenInfo.logo_url));
                return (
                  <p>
                    <img src={tokenUrl} alt={tokenInfo.symbol} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                      +{receiveTx.amount} {tokenSymbol}
                  </p>
                );
              })}
            </>);
        }
        if (record['sends'].length !== 0) {
          showDataSends = (
            <>
              { record['sends'].map(sendTx => {

                const myTokenInfo = tokenInfo[sendTx.token_id];
                const tokenSymbol = ((myTokenInfo === undefined) ? (null) : (myTokenInfo.symbol));
                const tokenUrl = ((myTokenInfo === undefined) ? ("/img/coin-default.b2295297.svg") : (myTokenInfo.logo_url === null ? "/img/coin-default.b2295297.svg" : myTokenInfo.logo_url));
                return (
                  <p>
                    <img src={tokenUrl} alt={tokenInfo.symbol} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                      -{sendTx.amount} {tokenSymbol}
                  </p>
                );
              })}
            </>
          );
        }
        return (<div>{showDataSends}{showDataReceives}</div>);
      }
    },
    {
      title: 'Gas Fee',
      dataIndex: 'gas fee',
      key: 'gas fee',
      render: (text, record) => {
        if (record.tx === undefined || record.tx === null)
          return;
        const txInfo = record.tx;
        const ethGasFee = txInfo.eth_gas_fee;
        const usdGasFee = txInfo.usd_gas_fee;

        return (<p>Gas Fee : {Number(ethGasFee).toFixed(4)} BNB (${Number(usdGasFee).toFixed(4)})</p>);
      }
    }
  ];

  const getHistoryData = (startTime) => {
    axios.get('https://api.debank.com/history/list', {
      params: {
        chain: chainId,
        page_count: 100,
        start_time: startTime,
        token_id: '',
        user_addr: account
      }
    })
      .then(res => {
        if (res === undefined || res.data === undefined || res.data.length === 0 || res.data.data === undefined || res.data.data.history_list === undefined || res.data.data.history_list.length == 0)
          return;
        let tempTokenInfo = tokenInfo;
        tempTokenInfo = { ...tempTokenInfo, ...res.data.data.token_dict };
        setTokenInfo(tempTokenInfo);
        let tempProjectDict = projectDict;
        tempProjectDict = { ...tempProjectDict, ...res.data.data.project_dict };
        setProjectDict(tempProjectDict);
        let tempResult = result;
        tempResult = tempResult.concat(res.data.data.history_list);
        setResult(tempResult);
      }).catch(err => console.log(err))
  }

  useEffect(() => {
    if (result === undefined) return;
    if (result.length === 0) return;
    console.log(result);
    getHistoryData(result[result.length - 1].time_at);
  }, [result]);

  useEffect(() => {
    if (account === undefined || account === '0')
      return;
    getHistoryData(0);
  }, []);

  return (
    <>
      <h2>{props.accountAddress}</h2>
      <Table sticky columns={columns} dataSource={result} rowKey="id"></Table>
    </>
  );
}

export default FarmingHistory;