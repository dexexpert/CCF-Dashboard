import React, { Component, useState } from 'react';
import {
  ConfigProvider,
  Radio,
  Input,
  Button,
  Select,
  DatePicker,
  Divider,
  Table,
  Card,
} from 'antd';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <div className="config-provider">
      <Radio.Group
        value={componentSize}
        onChange={e => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Input />
        </div>
        <div className="example">
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
        </div>
        <div className="example">
          <DatePicker />
        </div>
        <div className="example">
          <Button>Button</Button>
        </div>
        <div className="example">
          <Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </div>
      </ConfigProvider>
    </div>
  );
};

export class Size extends Component {
	render() {
		return (
			<FormSizeDemo />
		)
	}
}

export default Size
