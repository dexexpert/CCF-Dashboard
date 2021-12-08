import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/bsc`} component={lazy(() => import(`./bsc`))} />
        <Route path={`${match.url}/fantom`} component={lazy(() => import(`./fantom`))} />
        <Route path={`${match.url}/avalanche`} component={lazy(() => import(`./avalanche`))} />
        <Route path={`${match.url}/polygon`} component={lazy(() => import(`./polygon`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/bsc`} />
      </Switch>
    </Suspense>
  )
};

export default Dashboards;