const { SearchDialog } = require('botfuel-module-facetedsearch');
const ArticleDb = require('../dbs/article-db');

class EventSearchDialog extends SearchDialog {}

EventSearchDialog.params = {
  namespace: 'eventsearch',
  db: ArticleDb,
  entities: {
    type_name: {
      dim: 'type_name',
    },
    event_name: {
      dim: 'event_name',
    },
    link_url_1: {
      dim: 'link_url_1',
    },
  },
};

module.exports = EventSearchDialog;
