//!! Basic usage

const { ntfy } = require('notify-client');

// Set up ntfy to connect to api with the correct sercret
ntfy.settings({ secret: 'lksjdc0123moxcv-sdfxcf0-123sdlkjf' });

// parse the message to allow ## Title and <b>bold text</b> like syntax
ntfy.info('message', { parseMode: 'html | markdown' });

// functionality to exclude some messengers to recieve notification if they are connected
ntfy.error('errorMessage', { exclude: 'telegram | slack' });

// resemble functionality of your typical logger

ntfy.log('logInfo', { logLevel: 'warning | error | all' });

ntfy.log('logInfo', { logger: pino || winston || 'whatever' });

// just a basic idea of message that is auto deleted by bot automatically
ntfy.selfDestruct('self destructing message', { timeout: 20000 });

//!! Suggestion

// to expose each individual messenger as a separate object with traditional methods like those above, ntfy in turn uses all connected messengers in turn

const ntfy = {
  error: ctx => {
    ctx.telegramConnected && telegram.error('error');
    ctx.slackConnected && slack.error('error');
    ctx.otherMessengerConnected && otherMessenger.error('error');
  },
  telegram:{
    error:(ctx)=> ctx.telegramConnected && api.sendMsg()
  }
  slack,
  otherMessenger,
};

const { telegram, slack } = ntfy;

// telegram only message

telegram.info('info message');

// slack

slack.error('slack only message');
