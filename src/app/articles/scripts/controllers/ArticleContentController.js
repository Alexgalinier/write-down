(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticleContentController', ArticleContentController);

  function ArticleContentController($scope, $stateParams, $interval, ArticlesService) {
    var vm = this;

    vm.article = null;
    vm.articleHasChanged = false;
    vm.articleNewContent = '';

    init();

    /* ---------------------
     * Public Functions
     * --------------------- */

    // ...

    /* ---------------------
     * Privates Functions
     * --------------------- */

    function init() {
      var timer = $interval(function() {
        console.log('check save');
        if (vm.articleHasChanged) {
          vm.articleHasChanged = false;

          vm.article.content = vm.articleNewContent;

          ArticlesService.save(vm.article).then(function() {
            console.log('saved');
          });
        }
      }, 1000);

      $scope.$on("$destroy", function() {
        console.log('Article destroyed');
        if (timer) $interval.cancel(timer);
      });

      getArticle();
    }

    function getArticle() {
      return ArticlesService.getById($stateParams.id).then(function(article) {
        vm.article = article;
        return vm.article;
      });
    }
  }

})();
