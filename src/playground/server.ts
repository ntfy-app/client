const express = require('express');
import { ntfy, Client } from '../core/ntfy';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  ntfy.init({ token: 'alksdjflkjqweliqjij', logLevel: 'ERROR', label: 'PROD' });
  ntfy.getToken();
  ntfy.log('sent from client', 'DEBUG');
  const marketingClient = new Client('salkqwejsdfs');
  const otherClient = new Client('qweoixcfjsiosfd');
  marketingClient.getToken();
  otherClient.getToken();
});
