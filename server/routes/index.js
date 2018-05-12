const express = require('express');
const router = express.Router();
const userRouter = require('../users/router.js');

userRouter(router);

module.exports = router;