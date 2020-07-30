const express = require('express')
const { Client } = require('ntfy-client')

const app = express()

const client = new Client('clientse_dev_0AqcDI-cDAB3BTy1iNUuELx-QSQW', { api: 'http://localhost:4000/graphql' })

app.get('/', (req, res) => {
  client.info('got request')

  res.status(200).send('Hello World!')
})

app.listen(() => {
  client.event({ title: 'server started', message: 'started on port 5000' })
  client.info('got request')
  client.status({ state: 'UP', message: 'app is up and running!' })
})
