const express = require('express');
const siteController = require('../app/controllers/SiteController');
const route = express.Router();

route.use('/search', siteController.search)
route.use('/login', siteController.login)
route.use('/', siteController.index)

module.exports = route;