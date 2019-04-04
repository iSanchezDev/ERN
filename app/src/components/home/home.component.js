import React from 'react';
import {Col, Row, Tabs} from 'antd';
import CitiesTable from '../tables/cities/cities.table.component';

const TabPane = Tabs.TabPane;

class HomeComponent extends React.Component {

  render() {

    return (
      <Row type='flex' justify='center' className={'wp-home'}>
        <Col span={20}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Cities" key="1">
              <CitiesTable/>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    );
  }
}


export default HomeComponent;
