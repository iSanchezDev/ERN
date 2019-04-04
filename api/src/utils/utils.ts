import _ from 'lodash';

export function normalizeDataFromCSV(data) {

  return _.map(data, object => {
    let parseObject = {};
    _.mapValues(object, (value, key) => {

      // Numbers are right
      const parseValue = isNaN(value) ? value : parseFloat(value);

      // New object w/o space, tab, carriage...
      let parseKey: string = parsingKeys(key);

      // Replace rows key from csv
      if (parseKey === '#') parseKey = parseKey.replace('#', 'index');

      // return new object
      parseObject[parseKey] = parseValue;
    });
    return parseObject
  });
}

function parsingKeys(key) {

  const _key = key.toLowerCase().replace(/\s/g, '_');

  switch (_key) {
    case '100m+':
      return 'hundred';
    case '150m+':
      return 'hundredFifty';
    case '200m+':
      return 'twoHundred';
    case '300m+':
      return 'threeHundred';
    default:
      return _key;
  }
}

export function filterByQueryParams(data, query) {

  let sortingData = _.cloneDeep(data);
  const {sortBy, sortOrder} = query;

  if (sortOrder === 'ascend') {
    return _.sortBy(sortingData, [sortBy], ['asc'])
  }
  return _.sortBy(sortingData, [sortBy]).reverse(); // Not working desc
}
