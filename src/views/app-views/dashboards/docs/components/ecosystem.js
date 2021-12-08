import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '$CCF token',
    description: 'Seed investing and staking launchpad',
  },
  {
    key: '2',
    name: 'Farming and Staking',
    description: 'Farming and Staking',
  },
  {
    key: '3',
    name: 'CCF asset management',
    description: 'Auditing/Tokenomics on chain analysis',
  },
  {
    key: '4',
    name: 'Portfolio building',
    description: 'Portfolio building',
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'description',
    dataIndex: 'description',
    key: 'description',
  },
];

const Introduction = () => {
  return (
    <div>
      <h2>The Cross Chain Farming Ecosystem</h2>
      <p className="font-size-md">
        <p>
          Unlike other emerging DeFi 3.0 tokens, we are building an entire DeFi 3.0 ecosystem.
        </p>
        <p>
          We go beyond FaaS with additional real-world utility for an entire cross-chain ecosystem for all:
        </p>
        <p>
          <Table dataSource={dataSource} columns={columns} />;
        </p>
      </p>
    </div>
  )
}

export default Introduction
