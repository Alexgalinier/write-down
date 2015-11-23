(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticleContentController', ArticleContentController);

  function ArticleContentController($scope, $stateParams, $interval, ArticlesService) {
    var vm = this;

    vm.article = null;
    vm.articleHasChanged = false;
    vm.content = '';

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
        if (vm.articleHasChanged) {
          vm.articleHasChanged = false;
          vm.article.content = vm.articleNewContent;

          ArticlesService.save(vm.article).then(function() {
            console.log('saved');
          });
        }
      }, 1000);

      $scope.$on("$destroy", function() {
        if (timer) $interval.cancel(timer);
      });

      getArticle();
    }

    function getArticle() {
      return ArticlesService.getById($stateParams.id).then(function(article) {
        vm.article = article;
        vm.content= vm.article.content;
        return vm.article;
      });
    }
  }

})();
