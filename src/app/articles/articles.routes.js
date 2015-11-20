(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/articles/0/main");

    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        templateUrl: 'articles/views/Articles.html',
      })
      .state('articles.list', {
        url: '/:id/:name',
        views: {
          menu: {
            templateUrl: 'articles/views/ArticlesMenu.html',
            controller: 'ArticlesMenuController',
            controllerAs: 'vm'
          },
          content: {
            templateUrl: 'articles/views/ArticleContent.html',
            controller: 'ArticleContentController',
            controllerAs: 'vm'
          }
        }
      })
  }

})();
