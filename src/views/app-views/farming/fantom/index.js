import React from "react";
import DemoCard from 'components/util-components/DemoCard';
import Basic from './Basic';
import BasicMd from './basic.md';
const DataDisplayComponents = ({ match }) => (
  <React.Fragment>
    <DemoCard code={BasicMd}><Basic /></DemoCard>
  </React.Fragment>
);

export default DataDisplayComponents;