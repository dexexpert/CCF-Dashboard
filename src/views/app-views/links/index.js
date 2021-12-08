import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/links/coingecko`}
          render={() => {
            window.open("https://www.coingecko.com/en/coins/cross-chain-farming/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }}
        />
        <Route path={`${APP_PREFIX_PATH}/links/coinmarketcap`}
          render={() => {
            window.open("https://coinmarketcap.com/currencies/cross-chain-farming/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }}
        />
        <Route path={`${APP_PREFIX_PATH}/links/dextools`}
          render={() => {
            window.open("https://www.dextools.io/app/bsc/pair-explorer/0x83a0962ae816604a6b162a5e054912982c8e4c1c/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }}
        />
        <Route path={`${APP_PREFIX_PATH}/links/pancakeswap`}
          render={() => {
            window.open("https://pancakeswap.finance/swap/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          }
        />

        <Route path={`${APP_PREFIX_PATH}/links/twitter`}
          render={() => {
            window.open("https://twitter.com/Crosschainfarm/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          }
        />

        <Route path={`${APP_PREFIX_PATH}/links/telegram`}
          render={() => {
            window.open("https://t.me/ccfarming/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          } />


        <Route path={`${APP_PREFIX_PATH}/links/medium`}
          render={() => {
            window.open("https://medium.com/@ccfdao/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          }
        />

        <Route path={`${APP_PREFIX_PATH}/links/bscscan`}
          render={() => {
            window.open("https://bscscan.com/address/0x7f9528b913a99989b88104b633d531241591a358/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          }
        />

        <Route path={`${APP_PREFIX_PATH}/links/github`}
          render={() => {
            window.open("https://github.com/ccfdao/", '_blank');
            return <Redirect to={`${APP_PREFIX_PATH}/dashboards/`} />
          }
          }
        />
        <Redirect from={`${APP_PREFIX_PATH}/links/`} to={`${APP_PREFIX_PATH}/dashboards/`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);

/*
*/