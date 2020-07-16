const express = require('express');
import { ntfy, Client, LogLevel, AppStatus } from '../core/ntfy';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  ntfy.init({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MSwiaWQiOjIyLCJpYXQiOjE1OTQ5MDUzODR9.P3gy58ch8VTw96THnpUTbtJY9Jpkv2CLxhQqGX2zB64',
    label: 'main',
  });
  ntfy.log({ message: 'message', level: LogLevel.INFO, metadata: { blah: true } });
  ntfy.event('Ping', 'something is pinging');
  ntfy.status(AppStatus.DOWN, 'something is stating');

  const marketingClient = new Client(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6MSwiaWQiOjIyLCJpYXQiOjE1OTQ5MDUzODR9.P3gy58ch8VTw96THnpUTbtJY9Jpkv2CLxhQqGX2zB64',
  );
  marketingClient.log({ message: 'message', level: LogLevel.INFO, metadata: { blah: true } });
});
