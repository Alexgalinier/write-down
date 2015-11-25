// Core
var BackendService = function () {}

BackendService.prototype.send = function(promise) {
    return function(req, res, next) {
        return promise.then(function (results) {
            res.send(results);
            return next();
        });
    }
}

BackendService.prototype.sendValid = function(res, next) {
    res.send({
        status: 'ok'
    });

    return next();
};

// Exports
module.exports = BackendService;