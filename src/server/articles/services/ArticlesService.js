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

ArticlesService.add = function(req, res, next) {
    var newArticle = new ArticleModel({
        name: req.params.name
    });

    newArticle.save();

    ResponseHandler.sendValid(res, next);
}

ArticlesService.update = function(req, res, next) {
    ArticleModel.update({'_id': req.params.id}, {'name': req.params.name}, function(err) {
        ResponseHandler.sendValid(res, next);
    });
}

ArticlesService.delete = function(req, res, next) {
    ArticleModel.remove({'_id': req.params.id}, function(err) {
        ResponseHandler.sendValid(res, next);
    });
}

// Exports
module.exports = ArticlesService;