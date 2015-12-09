(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticlesMenuController', ArticlesMenuController);

  function ArticlesMenuController($scope, $state, ArticlesService, PubSubService) {
    var vm = this;

    vm.articles = [];

    vm.createArticle = createArticle;

    init();

    /* ---------------------
     * Public Functions
     * --------------------- */

    function createArticle() {
      ArticlesService.add({name: 'New article', level: 1, content:'let s write down some stuff !'});
    }


    /* ---------------------
     * Privates Functions
     * --------------------- */

    function init() {
      getArticles();

      var tokenCreateDelete = PubSubService.subscribe('articles.createdDeleted', function(articleToShow) {
        console.log(articleToShow);
        $state.go('articles.list', {id: articleToShow._id, name: articleToShow.name});
      });

      var tokenUpdate = PubSubService.subscribe('articles.updated', function() {
        getArticles();
      });

      $scope.$on('$destroy', function() {
        PubSubService.unsubscribe('articles.createdDeleted', tokenCreateDelete);
        PubSubService.unsubscribe('articles.updated', tokenUpdate);
      })
    }

    function getArticles() {
      return ArticlesService.getAll().then(function(articles) {
        vm.articles = articles;
        return vm.articles;
      });
    }
  }

})();
