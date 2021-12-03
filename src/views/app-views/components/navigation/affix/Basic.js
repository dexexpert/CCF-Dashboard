import React, { useState } from 'react';
import { Affix, Button } from 'antd';

const Demo = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <div>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </div>
  );
};

class Basic extends React.Component {

  render() {
    return (
      <Demo />
    )
  }
}

export default Basic;
