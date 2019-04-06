import csv from 'csvtojson';
import * as path from 'path';
import _ from 'lodash';
import {normalizeDataFromCSV, filterByQueryParams} from './../../utils/utils';


export async function getCities(req, res) {

  try {

    const filePath = path.join(__dirname, '../../../data/arkera_cities.csv');

    const JSONData = await csv().fromFile(filePath);

    if (JSONData) {
      let data = normalizeDataFromCSV(JSONData);

      if (!_.isEmpty(req.query)) {
        data = filterByQueryParams(data, req.query)
      }
      return res.status(200).json({status: 'ok', data})
    }

    res.status(404).json({status: 'error', message: 'Something went wrong reading cities CSV'})

  } catch (error) {
    console.error(error);
    res.status(404).json({status: 'error', message: 'Something went wrong reading cities CSV'})
  }
}
