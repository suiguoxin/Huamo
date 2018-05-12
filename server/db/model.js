const User = require('../users/model');
const Event = require('../events/model');

const model = {
    // 在此处扩展 model
    User: User,
    Event: Event,
};

module.exports = model;