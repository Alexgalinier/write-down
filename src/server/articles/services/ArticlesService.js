// Dependencies
var ResponseHandler = require('./../../common/ResponseHandler.js');
var ArticleModel = require('./../models/ArticleModel.js');
var _ = require('lodash');

// Core
var ArticlesService = {};

ArticlesService.getAll = function(req, res, next) {
    ArticleModel.find({}).then(function(results) {
        ResponseHandler.send(results, res, next);
    });
}

ArticlesService.get = function(req, res, next) {
    ArticleModel.find({'_id':req.params.id}).then(
        function(result) {
            ResponseHandler.send(result[0], res, next);
        },
        function() {
            ResponseHandler.send({}, res, next);
        });
}

ArticlesService.add = function(req, res, next) {
    var newArticle = new ArticleModel({
        name: req.params.name,
        level: req.params.level,
        content: req.params.content
    });

    newArticle.save();

    ResponseHandler.sendValid(res, next);
}

ArticlesService.update = function(req, res, next) {
    ArticleModel.update(
        {
            '_id': req.params.id
        },
        {
            name: req.params.name,
            level: req.params.level,
            content: req.params.content,
        },
        function(err) {
            ResponseHandler.sendValid(res, next);
        }
    );
}

ArticlesService.delete = function(req, res, next) {
    ArticleModel.remove({'_id': req.params.id}, function(err) {
        ResponseHandler.sendValid(res, next);
    });
}

// Exports
module.exports = ArticlesService;