// Core
var ResponseHandler = function () {}

ResponseHandler.prototype.sendValid = function(res, next) {
    this.send({status: 'ok'}, res, next);
};

ResponseHandler.prototype.send = function(data, res, next) {
    res.send(data);
    return next();
}

// Exports
module.exports = new ResponseHandler();