const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class TypeNameExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'type_name',
      corpus: new FileCorpus(`${__dirname}/../corpora/type_name.txt`),
      options: {},
    });
  }
}

module.exports = TypeNameExtractor;
