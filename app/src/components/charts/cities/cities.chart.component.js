import React, { PureComponent } from 'react';
import _ from 'lodash';
import connect from 'react-redux/es/connect/connect';
import { Row } from 'antd';
import {ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush} from 'recharts';


class CitiesChart extends PureComponent {

  render() {

    const {cities} = this.props;

    const dataSource = _.map(cities.list, (item, index )=> {
      return {
        key: index,
        name: item.city,
        buildings: item.all_buildings,
        structures: item.all_structures,
        hundred: item.hundred,
        hundredFifty: item.hundredFifty,
        twoHundred: item.twoHundred,
        threeHundred: item.threeHundred
      }
    });

    return (
      <Row>
        <div style={{ width: '100%', height: 500 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={dataSource}
              margin={{top: 20, right: 20, bottom: 20, left: 20,}}
            >
              <CartesianGrid stroke="#f5f5f5"/>
              <XAxis dataKey="name" name='City'/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar name='Buildings' dataKey="buildings" stackId="a" fill="#0094DA" />
              <Bar name='Structures' dataKey="structures" stackId="a" fill="#F9A61A" />
              <Line type="monotone" name='100m+' dataKey="hundred" stroke="#6f7291" />
              <Line type="monotone" name='150m+' dataKey="hundredFifty" stroke="#5c9394" />
              <Line type="monotone" name='200m+' dataKey="twoHundred" stroke="#5C946E" />
              <Line type="monotone" name='300m+' dataKey="threeHundred" stroke="#5c7894" />
              <Brush dataKey='name' height={30} stroke="#89c3f9"/>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  }
};

export default connect(mapStateToProps)(CitiesChart);
