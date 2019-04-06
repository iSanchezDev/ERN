import _ from 'lodash';

/**
 * @description Normalizing data given from CSV
 * @param data is the csv as JSON object
 * */
export function normalizeDataFromCSV(data) {

  return _.map(data, object => {

    let parseObject = {};

    // Iterate keys to parse
    _.mapValues(object, (value, key) => {

      // Make sure numbers are float
      const parseValue: any = isNaN(value) ? value : parseFloat(value);

      // New object properties w/o space, tab...
      let parseKey: string = parsingKeys(key);

      // New object built
      parseObject[parseKey] = parseValue;
    });

    return parseObject
  });
}

function parsingKeys(key) {
  const _key = key.toLowerCase().replace(/[\s]+/g, '_');
  return translateCaseKeys(_key);
}

function translateCaseKeys(key) {
  switch (key) {
    case '#':
      return 'index';
    case '100m+':
      return 'hundred';
    case '150m+':
      return 'hundredFifty';
    case '200m+':
      return 'twoHundred';
    case '300m+':
      return 'threeHundred';
    default:
      return key;
  }
}

/**
 * @description This method sort the list by params from url
 * @param data is a json from CSV
 * @param query is sortBy and sortOrder properties inside
 * */
export function filterByQueryParams(data, query) {

  let sortingData = _.cloneDeep(data);
  const {sortBy, sortOrder} = query;

  if (sortOrder === 'ascend') {
    return _.sortBy(sortingData, [sortBy], ['asc'])
  }
  return _.sortBy(sortingData, [sortBy]).reverse(); // Not working desc
}
