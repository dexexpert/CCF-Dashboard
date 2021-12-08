import {
  DashboardOutlined,
  WalletOutlined,
  MonitorOutlined,
  DotChartOutlined,
  ControlOutlined,
  LikeOutlined,
  GiftOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
  TeamOutlined,
  EyeOutlined,
  LinkOutlined,
  MediumOutlined,
  FundViewOutlined,
  GithubOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'dashboard-analytic',
      path: `${APP_PREFIX_PATH}/dashboards/analytic`,
      title: 'sidenav.dashboard.analytic',
      icon: DotChartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-mywallet',
      path: `${APP_PREFIX_PATH}/dashboards/mywallet`,
      title: 'sidenav.dashboard.mywallet',
      icon: WalletOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-airdrops',
      path: `${APP_PREFIX_PATH}/dashboards/airdrops`,
      title: 'sidenav.dashboard.airdrops',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-buybacks',
      path: `${APP_PREFIX_PATH}/dashboards/buybacks`,
      title: 'sidenav.dashboard.buybacks',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-stake',
      path: `${APP_PREFIX_PATH}/dashboards/stake`,
      title: 'sidenav.dashboard.stake',
      icon: ControlOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-votes',
      path: `${APP_PREFIX_PATH}/dashboards/votes`,
      title: 'sidenav.dashboard.votes',
      icon: LikeOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-docs',
      path: `${APP_PREFIX_PATH}/dashboards/docs`,
      title: 'sidenav.dashboard.docs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const farmingNavTree = [
  {
    key: 'farming',
    path: `${APP_PREFIX_PATH}/farming`,
    title: 'sidenav.farming',
    icon: MonitorOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'farming-bsc',
        path: `${APP_PREFIX_PATH}/farming/bsc`,
        title: 'sidenav.farming.bsc',
        icon: '',
        iconURL: "https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615",
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'farming-fantom',
        path: `${APP_PREFIX_PATH}/farming/fantom`,
        title: 'sidenav.farming.fantom',
        icon: '',
        iconURL: "https://assets.coingecko.com/coins/images/4001/small/Fantom.png?1558015016",
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'farming-avalanche',
        path: `${APP_PREFIX_PATH}/farming/avalanche`,
        title: 'sidenav.farming.avalanche',
        icon: '',
        iconURL: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818',
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'farming-polygon',
        path: `${APP_PREFIX_PATH}/farming/polygon`,
        title: 'sidenav.farming.polygon',
        icon: '',
        iconURL: "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912",
        breadcrumb: true,
        submenu: []
      }
    ]
  }
]

const spotassetNavTree = [{
  key: 'spotasset',
  path: `${APP_PREFIX_PATH}/spotasset`,
  title: 'sidenav.spotasset',
  icon: EyeOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'spotasset-holdings',
      path: `${APP_PREFIX_PATH}/spotasset/holdings`,
      title: 'sidenav.spotasset.holdings',
      icon: TeamOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'spotasset-Watchlist',
      path: `${APP_PREFIX_PATH}/spotasset/Watchlist`,
      title: 'sidenav.spotasset.Watchlist',
      icon: FundViewOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]

const linksNavTree = [{
  key: 'links',
  path: `${APP_PREFIX_PATH}/links`,
  title: 'sidenav.links',
  icon: LinkOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'links-coingecko',
      path: `${APP_PREFIX_PATH}/links/coingecko`,
      pathURL: "https://www.coingecko.com/en/coins/cross-chain-farming",
      title: 'sidenav.links.coingecko',
      icon: '',
      iconURL: "https://cloudflare-ipfs.com/ipfs/QmcP2gBPDXXAdSXtuypcsVhSHoatiRi3SBHS8qHeexPxW4",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-coinmarketcap',
      path: `${APP_PREFIX_PATH}/links/coinmarketcap`,
      title: 'sidenav.links.coinmarketcap',
      icon: '',
      iconURL: "https://cloudflare-ipfs.com/ipfs/QmQeHBsbXZX1i7SjEN5sVQWwkE34dQf4KpWGcJ1pHpnqrm",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-dextools',
      path: `${APP_PREFIX_PATH}/links/dextools`,
      title: 'sidenav.links.dextools',
      icon: '',
      iconURL: "https://cloudflare-ipfs.com/ipfs/QmQC95hyrDjcPmkSQHYYFUGC5bUu9ct4mAChfk8kf3ujUo",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-pancakeswap',
      path: `${APP_PREFIX_PATH}/links/pancakeswap`,
      title: 'sidenav.links.pancakeswap',
      icon: '',
      iconURL: "https://assets.coingecko.com/coins/images/12632/thumb/pancakeswap-cake-logo_%281%29.png?1629359065",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-twitter',
      path: `${APP_PREFIX_PATH}/links/twitter`,
      title: 'sidenav.links.twitter',
      icon: TwitterOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-telegram',
      path: `${APP_PREFIX_PATH}/links/telegram`,
      title: 'sidenav.links.telegram',
      icon: '',
      iconURL: "/img/icon/telegram.png",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-medium',
      path: `${APP_PREFIX_PATH}/links/medium`,
      title: 'sidenav.links.medium',
      icon: MediumOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-bscscan',
      path: `${APP_PREFIX_PATH}/links/bscscan`,
      title: 'sidenav.links.bscscan',
      icon: '',
      iconURL: "https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png?1547034615",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-github',
      path: `${APP_PREFIX_PATH}/links/github`,
      title: 'sidenav.links.github',
      icon: GithubOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]
const navigationConfig = [
  ...dashBoardNavTree,
  ...farmingNavTree,
  ...spotassetNavTree,
  ...linksNavTree
]

export default navigationConfig;
