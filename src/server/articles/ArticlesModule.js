// Dependencies
var ArticleService = require('./services/ArticlesService.js');

// Core
var ArticlesModule = function (server) {
  server.get('/rest/articles', ArticleService.getAll);
  server.put('/rest/articles', ArticleService.add);
  server.post('/rest/articles/:id', ArticleService.update);
  server.del('/rest/articles/:id', ArticleService.delete);
}

// Exports
module.exports = ArticlesModule;