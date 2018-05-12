const mongoose = require('mongoose');
const config = require('config-lite');

// mongodb 连接
mongoose.connect(config.mongodb);
// 此处防止 node.js - Mongoose: mpromise 错误
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'));
db.once('open', function () {
	console.log('Mongodb started successfully');
});

module.exports = mongoose;