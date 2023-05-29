import React, { Component } from 'react';
import { Spin, Space } from 'antd';

class SpinComp extends Component {
  render() {
    return (
      <Space direction="vertical" style={{ width: '100%', marginTop: '150px', marginBottom: '150px' }}>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    );
  }
}

export default SpinComp;
