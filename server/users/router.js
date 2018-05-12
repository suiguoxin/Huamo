const userController = require('./controller');
const checkToken = require('../middleware/checkToken.js');

module.exports = (router) => {
    router.post('/register', userController.Register),
        router.post('/login', userController.Login),
        router.get('/user', checkToken, userController.User);
};