import React from 'react'
import { Row, Col } from 'antd';

const Introduction = () => {
  return (
    <div>
      <h2>Why Trust Us?</h2>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={10} xxl={10}>
          <p className="font-size-md">
            <ul>
              <p>
                <li>
                  <strong>Fair launch: </strong>
                No private or public sales, no VCs,
no team tokens.
              </li>
              Everyone has an equal chance in a fair market.</p>
              <p>
                <li>
                  <strong>Locked liquidity: </strong>
                100% of liquidity tokens are
locked until 2025 making the project “un-ruggable”
              </li>
              </p><p>
                <li>
                  <strong>Low fees: </strong>
                launched on Binance Smart Chain
(BSC) for low fees so that everyone can join.
              </li></p>
            </ul>
          </p>
        </Col>
        <Col Col xs={24} sm={24} md={24} lg={14} xxl={14}>
          <img style={{
            width: '100%'
          }} src="/img/trust.png" alt='trust'></img>
        </Col>
      </Row>
    </div>
  )
}

export default Introduction
