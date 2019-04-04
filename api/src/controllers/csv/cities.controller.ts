import csv from 'csvtojson';
import * as path from 'path';
import _ from 'lodash';

export async function getCities(req, res) {

  try {
    const CSVFilePath = path.join(__dirname, '../../../data/arkera_cities.csv');

    const JSONData = await csv().fromFile(CSVFilePath);

    if (JSONData) {
      let data = normalizeDataFromCSV(JSONData);
      res.status(404).json({status: 'ok', data})
    }
  } catch (error) {
    res.status(404).json({status: 'error', message: 'Something went wring reading cities CSV', error})
  }
}

function normalizeDataFromCSV(data) {

  return _.map(data, object => {
    let parseObject = {};
    _.mapValues(object, (value, key) => {

      // Numbers are right
      const parseValue = isNaN(value) ? value : parseFloat(value);

      // New object w/o space, tab, carriage...
      let parseKey: string = key.toLowerCase().replace(/\s/g, '_');

      // Replace rows key from csv
      if (parseKey === '#') parseKey = parseKey.replace('#', 'row');

      // return new object
      parseObject[parseKey] = parseValue;
    });
    return parseObject
  });
}
