# MIS CAPSTONE README

The following bot was designed using Botfuel's faceted search framework which allows users to search a database via questions that are centered around specific 'facets' of the entities in the database. 

In the case of the event bot those facets are the category of the event and then the specific name of the event. 

In the current state the bot responds to questions about what events are happening and then provides details for each event once the user has expressed which event they are interested in.

Future abilities would include specifying specific time periods and filtering by interpretting services.

Python scripts have been added in /src/corpora/ & /src/dbs/ in order to consume the APIs set up to provide access to our Oracle APEX database. 

# Botfuel README

# Sample bot used in the [FacetedSearch module](https://docs.botfuel.io/dialog/modules/faceted-search)

This sample bot is used in the [**FacetedSearch demo**](https://docs.botfuel.io/platform/demos/faceted-search).

## Create an app

* Create a new app on Botfuel Trainer (https://app.botfuel.io). See the [Getting Started tutorial](https://tutorials.botfuel.io/#/codelab/getting-started?step=1) for how to create a new app.

* Add an intent with lable `article` with the following training phrases for examples:

  * I want to buy a pair of jeans
  * I want to buy a shirt
  * I want to buy some polos

* Add an intent with lable `greetings` with the following training phrases for examples:
  * Hi
  * Hello

You can get examples of intents here : https://github.com/Botfuel/botfuel-sample-facetedsearch/blob/master/intents.xlsx

## How to run the bot

Clone the repository:

```bash
git clone https://github.com/Botfuel/botfuel-sample-facetedsearch.git
```

Install dependencies

```
cd botfuel-sample-facetedsearch
yarn install
```

Start the bot:

```bash
BOTFUEL_APP_TOKEN=<...> BOTFUEL_APP_ID=<...> BOTFUEL_APP_KEY=<...> yarn start shell-config.js
```

If you set your app credentials right, you should see:

```bash
2018-04-05T20:31:26.529Z - info: [Environment] BOTFUEL_APP_TOKEN=<YOUR_BOT_APP_TOKEN>
2018-04-05T20:31:26.531Z - info: [Environment] BOTFUEL_APP_ID=<YOUR_BOT_ID>
2018-04-05T20:31:26.532Z - info: [Environment] BOTFUEL_APP_KEY=<YOUR_BOT_APP_KEY>
2018-04-05T20:31:26.588Z - debug: [ShellAdapter] run
```

Try typing `Hello` and `I want to buy a polo`

## Need help?

* See [**Getting Started**](https://tutorials.botfuel.io/#/codelab/getting-started?step=1) to learn how to run a bot in minutes.
* See [**Concepts**](https://docs.botfuel.io/platform/concepts) for explanations about the internals of the SDK.

## License

See the [**License**](LICENSE.md) file.
# event-bot
