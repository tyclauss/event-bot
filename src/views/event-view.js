const { SearchView } = require('botfuel-module-facetedsearch');

class EventView extends SearchView {
	render(userMessage, data){
		const { matchedEntities, missingEntities, data, facetValueCounts } = data;
		const messages = [];
		if (missingEntities.size !== 0) {
			const facet = missingEntities.keys().next().value;
			const facetValues = Object.keys(facetValueCounts[facet])
			return [
				new BotTextMessage(`What ${facet} do you like?`),
				new QuickrepliesMessage(facetValues),
			];
		}
	}
}

module.exports = EventView;