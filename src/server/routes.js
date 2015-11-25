var ArticleService = require('./articles/ArticlesService.js');

var Routes = function (server) {
    this.server = server;
}

Routes.prototype.init = function() {
    this.server.get('/rest/articles', ArticleService.getAll());
    this.server.put('/rest/articles', ArticleService.add);
}

module.exports = Routes;