import React, { Component } from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import {getCities} from '../../../actions/cities.actions';
import { Row, Table} from 'antd';

const paginationSize = 10;

class CitiesTable extends Component {

  state = {
    loading: false,
    query: null
  };

  constructor(props) {
    super(props);
    this.getCities = this.getCities.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  componentWillMount() {
    this.getCities()
  }

  getCities(query) {
    this.setState({loading: true});
    this.props.getCities(query).then(() => {
      this.setState({loading: false})
    });
  }

  handleTableChange(pagination, filters, sorter) {

    // Just sorting
    if (sorter.field && sorter.order) {
      this.sortTable(sorter)
    }

    // todo - pagination and filtering
  }

  sortTable(sorter) {
    const query = `?sortBy=${sorter.field}&sortOrder=${sorter.order}`;
    if (query !== this.state.query) {
      this.setState({query: query});
      this.getCities(query);
    }
  }

  render() {

    const {loading} = this.state;
    const {cities} = this.props;

    const columns = [{
        title: 'Index',
        dataIndex: 'index',
        key: 'index',
        sorter: true,
      }, {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        sorter: true,
      }, {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        sorter: true
      }, {
        title: 'All Buildings',
        dataIndex: 'all_buildings',
        key: 'all_buildings',
        sorter: true
      }, {
        title: 'All Structures',
        dataIndex: 'all_structures',
        key: 'all_structures',
        sorter: true
      }, {
        title: '100m+',
        dataIndex: 'hundred',
        key: 'hundred',
        sorter: true
      }, {
        title: '150m+',
        dataIndex: 'hundredFifty',
        key: 'hundredFifty',
        sorter: true
      }, {
        title: '200m+',
        dataIndex: 'twoHundred',
        key: 'twoHundred',
        sorter: true
      }, {
        title: '300m+',
        dataIndex: 'threeHundred',
        key: 'threeHundred',
        sorter: true
      }];

    const dataSource = _.map(cities.list, (item, index )=> {
      return {
        key: index,
        index: item.index,
        city: item.city,
        country: item.country,
        all_buildings: item.all_buildings,
        all_structures: item.all_structures,
        hundred: item.hundred,
        hundredFifty: item.hundredFifty,
        twoHundred: item.twoHundred,
        threeHundred: item.threeHundred
      }
    });

    return (
      <Row>
        <Table loading={loading}
               columns={columns}
               dataSource={dataSource}
               onChange={this.handleTableChange}
               pagination={{ pageSize: paginationSize }}
               size="middle"/>
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
    getCities: (data) => dispatch(getCities(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesTable);
