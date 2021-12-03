import React from "react";
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from "antd";

class Action extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
              <a href="#/">421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>
            <Descriptions.Item label="Effective Time">
              2017-10-10
            </Descriptions.Item>
            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <br />
        <PageHeader
          onBack={() => window.history.back()}
          title="Title"
          tags={<Tag color="blue">Running</Tag>}
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>
          ]}
        >
          <Row type="flex">
            <Statistic title="Status" value="Pending" />
            <Statistic
              title="Price"
              prefix="$"
              value={568.08}
              style={{
                margin: "0 32px"
              }}
            />
            <Statistic title="Balance" prefix="$" value={3345.08} />
          </Row>
        </PageHeader>
      </div>
    );
  }
}

export default Action;
