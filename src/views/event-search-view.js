const _ = require('lodash');
const { BotTextMessage, Logger, QuickrepliesMessage, WebAdapter } = require('botfuel-dialog');
const { SearchView } = require('botfuel-module-facetedsearch');

const logger = Logger('EventSearchView');

const questions = {
  type_name: 'What kinds of events are you interested in?',
  event_name: 'Which event would you like to hear more about?',
};

const getBotResponse = (facet, valueCounts) => {
  let facetValues = [];

  facetValues = valueCounts.map(o => o.value);

  return [new BotTextMessage(questions[facet]), new QuickrepliesMessage(facetValues)];
};

class EventSearchView extends SearchView {
  render(userMessage, { matchedEntities, missingEntities, data, facetValueCounts }) {
    logger.debug('render', {
      matchedEntities,
      missingEntities,
      data,
      facetValueCounts,
    });

    if (missingEntities.size !== 0) {
      return getBotResponse(missingEntities.keys().next().value, facetValueCounts);
    }

    const messages = [];
    if (data && data.length > 0) {
      messages.push(new BotTextMessage(`Here is everything I know about that event! Have fun!`));
      _.forEach(data, (d) => {
          if(d.location == null){
            d.location = 'not 100% sure where the event is but it is';
          }
          if(d.link_url_1 == null) {
            d.link_url_1 = '';
          } else {
            d.link_url_1 = ', here is a link with more info! ' + '(' + d.link_url_1 + ')';
          }
        messages.push(new BotTextMessage(d.event_name + ', ' + d.location + ' @' + d.event_date_time + d.link_url_1));
      });
    } else {
      messages.push(new BotTextMessage("Sorry we don't find any result!"));
    }
    return messages;
  }
}

module.exports = EventSearchView;
