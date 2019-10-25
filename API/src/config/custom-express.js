const express = require('express');
const cors = require('cors');
require('dotenv').config();

// App
const app = express();

// Routes
const routes = require('../routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
