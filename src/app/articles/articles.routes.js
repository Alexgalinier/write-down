(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/articles/content/0");

    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'articles/views/articlesMenu.html',
        controller: 'ArticlesMenuController',
        controllerAs: 'vm'
      })
      .state('articles.content', {
        url: '/content/:id',
        templateUrl: 'articles/views/articleContent.html',
        controller: 'ArticleContentController',
        controllerAs: 'vm'
      });
  }

})();
