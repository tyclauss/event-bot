const { PlainFacetDb } = require('botfuel-module-facetedsearch');

const data = require('./data');

const colorMap = {
  FF0000: 'Red',
  FFFFFF: 'White',
};

const ColorFilter = (value, param) =>
  param && colorMap[value] && colorMap[value].toLowerCase() === param.toLowerCase();

class ArticleDb extends PlainFacetDb {
  constructor() {
    super(data, {
      filter: PlainFacetDb.DEFAULTFILTER({
        type: PlainFacetDb.EQUAL,
        brand: PlainFacetDb.EQUAL,
        color: ColorFilter,
        size: PlainFacetDb.IN,
        sleave: PlainFacetDb.EQUAL,
        form: PlainFacetDb.EQUAL,
      }),
      done: hits => hits && hits.length <= 2,
    });
  }
}

module.exports = new ArticleDb();
