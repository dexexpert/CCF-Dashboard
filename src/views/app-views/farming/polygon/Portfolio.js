import React, { useState, useEffect } from "react";


const Web3 = require('web3');

const PortfolioPane = (props) => {
  return (
    <>
      This is portfolio pane !!!!!!!!!!;
      {props.accountAddress}
    </>
  );
}

export default PortfolioPane;