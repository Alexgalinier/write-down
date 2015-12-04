// Core
var ResponseHandler = function () {}

ResponseHandler.prototype.sendValid = function(res, next) {
    this.send({status: 'ok'}, res, next);
};

ResponseHandler.prototype.send = function(data, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.charSet('utf-8');
    res.send(data);
    return next();
}

// Exports
module.exports = new ResponseHandler();