(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .controller('ArticleContentController', ArticleContentController);

  function ArticleContentController($scope, $stateParams, $interval, ArticlesService, ArticlesConfig) {
    var vm = this;

    vm.article = null;
    vm.articleHasChanged = false;
    vm.articleSaving = false;
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
          if (((new Date).getTime() - vm.articleHasChanged.getTime()) > ArticlesConfig.saveAfterInterval) {
            vm.articleHasChanged = false;
            vm.articleSaving = true;
            vm.article.content = vm.articleNewContent;

            ArticlesService.save(vm.article).then(function() {
              vm.articleSaving = false;
            });
          }
        }
      }, ArticlesConfig.hasChangedTimer);

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
