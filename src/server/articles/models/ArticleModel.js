// Dependencies
var mongoose = require('mongoose');

// Core
var ArticleSchema = mongoose.Schema({
    name: String
});

var ArticleModel = mongoose.model('Article', ArticleSchema);

// Exports
module.exports = ArticleModel;