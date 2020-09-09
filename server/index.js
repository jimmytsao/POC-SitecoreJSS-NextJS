// server.js
const express = require('express')
const { parse } = require('url')
const path = require('path')
const next = require('next')
const bodyParser = require('body-parser')
const config = require('./../next.config.js')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({
  dev,
  dir: path.resolve(__dirname, '..'),
  conf: config
})
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json({ limit: '10mb' }))

  server.post('/api/html-renderer', require('./html-renderer')(nextApp))
  server.use((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  const port = process.env.$PORT || process.env.PORT || 3000
  server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})
