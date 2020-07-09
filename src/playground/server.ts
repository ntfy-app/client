const express = require('express');
import { ntfy, Client } from '../core/ntfy';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  ntfy.init({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MSwiaWQiOjEsImlhdCI6MTU5NDMwNTY1Mn0.PBjtLaFzYyLTPoLfy4dsZ3PDjSdj-Qal0s64qGe-li4',
    label: 'main',
  });
  ntfy.log('sent from client', 'DEBUG');
  ntfy.info('Info message');
  ntfy.error('Error message');

  const marketingClient = new Client(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MSwiaWQiOjEsImlhdCI6MTU5NDMwNTY1Mn0.PBjtLaFzYyLTPoLfy4dsZ3PDjSdj-Qal0s64qGe-li4',
  );
  marketingClient.log('sent from marketing client', 'DEBUG');
});
