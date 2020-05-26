const express = require('express');
import { ntfy, Client } from '../core/ntfy';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  ntfy.init({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MSwiaWQiOjE5LCJpYXQiOjE1OTA1MDA2ODl9.jKjUlEOVWw-Vpa6j5_Hnzzv08CxWMLj9PKrowbByDoA',
    label: 'PROD',
  });
  ntfy.log('sent from client', 'DEBUG');
  // const marketingClient = new Client('salkqwejsdfs');
  // const otherClient = new Client('qweoixcfjsiosfd');
  // marketingClient.getToken();
  // otherClient.getToken();
});
