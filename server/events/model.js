const mongoose = require('../db/mongoose');

var eventSchema = mongoose.Schema({
	name: String,
	type: String,
	description: String
});
var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
