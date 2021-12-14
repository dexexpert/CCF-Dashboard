import { Table } from 'antd'
import React from 'react';

const columns = [
  {
    title: 'Name', dataIndex: 'name', key: 'name',
  },
  {
    title: 'Meet Us',
    dataIndex: 'x',
    key: 'x',
    render: (text, row, index) => {
      if (index === 0) {
        return {
          children: (<div><a href="https://twitter.com/ccf_rago">Twitter</a>
            <a style={{ paddingLeft: '20px' }} href="https://www.youtube.com/c/RagoHQ">YouTube</a></div>)
        }
      }
      if (index === 1) {
        return {
          children: (<a href="https://twitter.com/ccf_shunsui">Twitter</a>)
        }
      }
      if (index === 2) {
        return {
          children: (<a href="https://twitter.com/CrossChainAlex">Twitter</a>)
        }
      }
      if (index === 3) {
        return {
          children: (<a href="https://twitter.com/DenoRago">Twitter</a>)
        }
      }
      if (index === 4) {
        return {
          children: (<a href="https://twitter.com/CreativeCcf">Twitter</a>)
        }
      }
    }
  },
];

const data = [
  {
    key: 1,
    x: 'Twitter, YouTube',
    name: 'CTO: Rago',
    description: 'Mobile and blockchain dev, part-time YouTuber, trader, farmer and on-chain analyst.',
  },
  {
    key: 2,
    name: 'COO & CIO: Shunsui',
    description: 'TradFi turned Crypto enthusiast, Investor, Farmer, Fundamental and Technical analyst.',
  },
  {
    key: 3,
    name: 'COO & CIO: Shunsui',
    description: 'Media and tech entrepreneur with multiple exits, scale up and marketing pro.',
  },
  {
    key: 4,
    name: 'Lead Portfolio Manager: Deno',
    description: 'Spot Portfolio and Dividend Manager',
  },
  {
    key: 5,
    name: 'Design and Creativity: Moo',
    description: 'Graphic designer extraordinaire',
  }
];

const Introduction = () => {
  return (
    <div>
      <h2>Our Team</h2>

      <Table
        columns={columns}
        expandable={{
          expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
          rowExpandable: record => record.name !== 'Not Expandable',
        }}
        dataSource={data}
      />
    </div>
  )
}

export default Introduction
