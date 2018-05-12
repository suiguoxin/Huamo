const eventController = require('./controller')

module.exports = (router) => {
	router.get('/events', eventController.Events)
		.post('/event/create', eventController.Create)
		.get('/event/getEventInfoById', eventController.GetEventInfoById)
};
