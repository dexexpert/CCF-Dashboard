import React from 'react'
import {
  GlobalOutlined,
  MessageOutlined,
  TwitterOutlined,
  MediumCircleFilled,
  LineChartOutlined,
  FileTextOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';

const Introduction = () => {
  return (
    <div>
      <h2>Useful Links</h2>
      <p className="font-size-md">
        <p style={{
          padding: 'none'
        }}>
          <GlobalOutlined /> Website : <a href="https://www.ccfdao.com">Cross Chain Farming</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <MessageOutlined /> Telegram : <a href="https://t.me/ccfarming">@ccfarming</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <TwitterOutlined /> Twitter : <a href="https://twitter.com/crosschainfarm?s=21">@crosschainfarm</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <MediumCircleFilled /> Medium : <a href="https://medium.com/@ccfdao">@ccfdao</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <span role="img" aria-label="telegram" className="anticon anticon-telegram">
            <img style={{ marginTop: "-10px" }} width="17px" height="17px"
              src="https://cloudflare-ipfs.com/ipfs/QmQeHBsbXZX1i7SjEN5sVQWwkE34dQf4KpWGcJ1pHpnqrm" alt='ico' />
          </span> CMC : <a href="https://coinmarketcap.com/currencies/cross-chain-farming/">Coin Market Cap</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <span role="img" aria-label="telegram" className="anticon anticon-telegram">
            <img style={{ marginTop: "-10px" }} width="17px" height="17px"
              src="https://cloudflare-ipfs.com/ipfs/QmcP2gBPDXXAdSXtuypcsVhSHoatiRi3SBHS8qHeexPxW4" alt='ico' />
          </span> CG : <a href="https://www.coingecko.com/en/coins/cross-chain-farming">CoinGecko</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <LineChartOutlined /> DexTools : <a href="https://www.dextools.io/app/bsc/pair-explorer/0x83a0962ae816604a6b162a5e054912982c8e4c1c">DexTools</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <FileTextOutlined /> Contract : <a href="https://bscscan.com/address/0x7f9528b913A99989B88104b633D531241591A358#code">BSCScan</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <QuestionCircleOutlined /> Where to buy :
          <a href="https://www.dextools.io/app/bsc/pair-explorer/0x83a0962ae816604a6b162a5e054912982c8e4c1c">DexTools,</a> {' '}
          <a href="https://poocoin.app/tokens/0x7f9528b913a99989b88104b633d531241591a358">Poocoin,</a> {' '}
          <a href="https://pancakeswap.finance/swap">PancakeSwap,</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <UserOutlined /> Contract audit : <a href="https://blog.hashex.org/cross-chain-farming-smart-contracts-final-audit-report-738e42d5761e">Hashex</a>
        </p>
        <p style={{
          padding: 'none'
        }}>
          <LockOutlined /> Liquidity lock : <a href="https://cryptexlock.me/pair/56/0x83a0962aE816604a6b162a5E054912982C8e4C1C">CryptEx Locker</a>
        </p>
      </p>
    </div>
  )
}

export default Introduction
