const express = require('express');
const router = express.Router();


const home = require('./controllers/home');
const dashboard = require('./controllers/dashboard');
const panel = require('./controllers/panel');

router.use('/',home);
router.use('/dashboard',dashboard);
router.use('/panel',panel);

module.exports =router;