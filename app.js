const express = require('express');
const app = express();
const { dateHandler } = require('./date_handler');
const { logRequests } = require('./middlewares/logger');

app.use(logRequests);

app.get("/api/:date?", dateHandler);

module.exports = app;