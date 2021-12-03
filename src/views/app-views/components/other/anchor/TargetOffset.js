import React, { Component, useState, useEffect } from "react";
import { Anchor } from "antd";

const { Link } = Anchor;

const AnchorExample = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <Anchor targetOffset={targetOffset}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
};

export class TargetOffset extends Component {

  render() {
    return (
      <AnchorExample />
    );
  }
}

export default TargetOffset;
