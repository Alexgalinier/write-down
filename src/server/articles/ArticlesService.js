// Dependencies
var BackendService = require('./../common/BackendService.js');
var ArticleModel = require('./ArticleModel.js');

// Core
var ArticlesService = function () {}
ArticlesService.prototype = Object.create(BackendService.prototype);

ArticlesService.prototype.getAll = function() {
    return this.send(ArticleModel.find({}));
}

ArticlesService.prototype.add = function(req, res, next) {
    var newArticle = new ArticleModel({
        name: req.params.name
    });

    newArticle.save();

    return this.sendValid(res, next);
}

// Exports
module.exports = new ArticlesService();