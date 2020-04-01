# cli-analytics-sdk

With this SDK you can set up a client for a Cli-Analytics App.
Cli-Analytics App is an application specially designed to keep a record of all cli commands that are executed for a certain project. How to build it up for you personal needs, find out [here](https://github.com/LimeChain/cli-analytics)

Insatll the SDK as a npm package:

``` npm install cli-analytics-sdk```

Set up the cli analytics client:

```
    const CliAnalyticsClient = require('cli-analytics-sdk');
    
    const analyticsClient = new CliAnalyticsClient({
        appId: yourAppId,
        url: yourAppUrl
    })
```
Where `yourAppId` is the id that would verify your access to the App and `yourAppUrl` is the url that your App is deployed on.


To record a data to your storage:

```
    analyticsClient.recordEvent(eventType, metadata);
```
Where `eventType` is the name of the cli command that has been executed and `metadata` is array of command's params values if any.

If you want to query a data:

```
    let response = await analyticsClient.getEvents(eventType)
```
