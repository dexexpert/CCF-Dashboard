import React from "react";

import FarmingHistory from 'components/shared-components/FarmingHistory';

const HistoryPane = (props) => {

  return (
    <>
      <FarmingHistory chainId="bsc" accountAddress={props.accountAddress} />
    </>
  );
}

export default HistoryPane;