const express = require('express');

const PreviewController = require('./app/controllers/PreviewController');

const routes = express.Router();

routes.post('/', PreviewController.index);
routes.post('/preview', PreviewController.index);

module.exports = routes;
