var Apply = require('../models/Apply');

exports.new_apply = function(req, res) {
    res.render('finance/new_apply', {
        title: 'new_apply'
    });
};

exports.invest = function(req, res) {
    res.render('finance/invest', {
        title: 'invest'
    });
};

exports.createApply = function(req, res) {
    var applyObj = req.body;
    applyObj.userID = req.user.id;
    console.log(applyObj);
    Apply.create(applyObj, function (err, apply) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(apply);
        }
    });
}