const model = require('../db/model.js')

// 所有event打印
const Events = (req, res) => {
    model.Event.find({}, (err, doc) => {
        if (err) {
            console.log(err);
        }
        res.send(doc);
    });
};

// 创建event
const Create = (req, res) => {
    // create event
    let eventCreate = new model.Event({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description
    });

    eventCreate.save((err, event) => {
        if (err) {
            console.log(err);
            return handleError(err);
        } else {
            res.json({
                success: true
            });
        }
    });
};

// Event Info
const GetEventInfoById = (req, res) => {
    model.Event.findById(req.query.id)
        .exec((err, event) => {
            if (err || !event) {
                res.json({
                    success: false
                });
                return;
            }
            res.send(event);
        });
};

module.exports = {
    Events,
    Create,
    GetEventInfoById
};
