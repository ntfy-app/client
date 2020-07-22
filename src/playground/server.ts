const express = require('express');
import { ntfy, Client, LogLevel, AppState } from '../core/ntfy';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  ntfy.init({
    token: 'clientse_dev_Cs-5U4XhLKta-HN1SZty7pse2s9w',
    label: 'main',
  });
  ntfy.log({ message: 'message', level: LogLevel.INFO, metadata: { blah: true } });
  ntfy.event('Ping', 'something is pinging');
  ntfy.status(AppState.DOWN, 'something is stating');

  const marketingClient = new Client('clientse_dev_Cs-5U4XhLKta-HN1SZty7pse2s9w');
  marketingClient.log({ message: 'message', level: LogLevel.INFO, metadata: { blah: true } });
});
