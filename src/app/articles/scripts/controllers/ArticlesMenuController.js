(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticlesMenuController', ArticlesMenuController);

  function ArticlesMenuController(ArticlesService) {
    var vm = this;

    vm.articles = [];

    init();

    /* ---------------------
     * Public Functions
     * --------------------- */

    // ...

    /* ---------------------
     * Privates Functions
     * --------------------- */

    function init() {
      getArticles().then(function() {
        console.log('Articles filled');
      });
    }

    function getArticles() {
      return ArticlesService.getAll().then(function(articles) {
        vm.articles = articles;
        return vm.articles;
      });
    }
  }

})();
