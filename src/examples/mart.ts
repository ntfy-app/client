//!! Basic usage

const ntfy = require('notify-client');

// defined in lib
enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
}

enum LogFormat {
  TEXT,
  HTML, // define supported elements
  MARKDOWN, // define supported elements
}

// defined in lib
type Settings = {
  token: string;
  level?: LogLevel;
  format?: LogLevel;
  label?: string; // adds { label: '<label>' } to metadata on each log/event/status
  timestamp?: boolean; // adds { timestamp: '<timestamp>' } to metadata on each log/event/status
};

// Initialize ntfy with Settings type
ntfy.init({
  token: 'clientSecretToken',
  level: LogLevel.WARN,
  label: 'dev',
  timestamp: true,
});

// defined in lib
type LogObject = {
  level: LogLevel;
  message: string;
  metadata: unknown;
};

// general log func
ntfy.log({
  level: LogLevel.ERROR,
  message: 'Could not create user!',
  metadata: { name: 'Martin Nirtl', email: 'martin.nirtl@gmail.com' }, // pls ignore that this is personal info
});

// level-specific log func
ntfy.info('Created user!', { id: userId }); // paramlist: message, metadata

// dedicated instance (takes Settings type as input for contructor)
// default instance is e.g. used for dev notifications (logs, etc)
// the dedicated instance could be used for application notifications e.g. marketing ppl.therefore it would make sense to support dedicated instances for different departments/teams (e.g. marketing, sales)
const marketingClient = new ntfy.Client({
  token: 'someOtherClientSecretToken',
  format: LogFormat.MARKDOWN,
});

ntfy.info('initialized app specific ntfy instance'); // goes to operations/dev team

// 'send' could allow more beautiful logs for non-devs
// 'send' is just a random name for this functionality
marketingClient.send(`
  **Hello ${user}**,\n
  your weekly report is ready: (SEO report)[${reportURL}]
`);
