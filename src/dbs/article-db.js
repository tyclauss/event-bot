const { PlainFacetDb } = require('botfuel-module-facetedsearch');

const data = require('./data');


const metaData = {
  filter: PlainFacetDb.DEFAULTFILTER({
    type_name: PlainFacetDb.EQUAL,
    event_name: PlainFacetDb.EQUAL,
    link_url_1: PlainFacetDb.EQUAL,
    event_date_time: PlainFacetDb.EQUAL,
    location: PlainFacetDb.EQUAL,
  }),
  done: hits => hits && hits.length <= 1,
};

const ArticleDb = new PlainFacetDb(data, metaData);

module.exports = ArticleDb;
