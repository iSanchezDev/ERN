import React, { Component } from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import {getCities} from '../../../actions/cities.actions';
import {Avatar, Row, Table} from 'antd';

class CitiesTable extends Component {

  state = {
    loading: true
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCities().then(() => {
      this.setState({loading: false})
    });
  }

  render() {

    const {loading} = this.state;
    const {spotify} = this.props;
    const {categories} = spotify;

    const columns = [{
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      width: 200,
      render: (text) => <Avatar shape="square" size={90} src={text}/>
    }, {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }];

    const dataSource = _.map(categories.items, (item, index )=> {
      return {
        key: index,
        id: item.id,
        name: item.name,
        icon: item.icons[0].url,
      }
    });

    return (
      <Row>
        <Table dataSource={dataSource} columns={columns} loading={loading} pagination={{ pageSize: 5 }} size="middle"/>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => dispatch(getCities()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesTable);
