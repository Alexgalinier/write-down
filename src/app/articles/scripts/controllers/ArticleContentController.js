(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticleContentController', ArticleContentController);

  function ArticleContentController(ArticlesService, $stateParams) {
    var vm = this;

    vm.article = '';

    init();

    /* ---------------------
     * Public Functions
     * --------------------- */

    // ...

    /* ---------------------
     * Privates Functions
     * --------------------- */

    function init() {
      getArticle().then(function() {
        console.log('Article filled');
      });
    }

    function getArticle() {
      return ArticlesService.getById($stateParams.id).then(function(article) {
        vm.article = article;
        return vm.article;
      });
    }
  }

})();
