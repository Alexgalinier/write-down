(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticlesMenuController', ArticlesMenuController);

  function ArticlesMenuController(ArticlesService, $state) {
    var vm = this;

    vm.articles = [];

    vm.createArticle = createArticle;

    init();

    /* ---------------------
     * Public Functions
     * --------------------- */

    function createArticle() {
      ArticlesService.add({name: 'New article', level: 1, content:'let s write down some stuff !'}).then(function(newArticle) {
        getArticles();
        return newArticle;
      }).then(function(newArticle) {
        $state.go('articles.list', {id: newArticle._id, name: newArticle.name});
      });
    }


    /* ---------------------
     * Privates Functions
     * --------------------- */

    function init() {
      getArticles();
    }

    function getArticles() {
      return ArticlesService.getAll().then(function(articles) {
        vm.articles = articles;
        return vm.articles;
      });
    }
  }

})();
