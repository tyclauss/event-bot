const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class EventNameExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'event_name',
      corpus: new FileCorpus(`${__dirname}/../corpora/event_name.txt`),
      options: {},
    });
  }
}

module.exports = EventNameExtractor;
