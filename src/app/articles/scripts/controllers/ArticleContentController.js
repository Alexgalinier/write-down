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
    vm.title = '';
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
            vm.article.name = vm.articleNewTitle;
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

    function onTitleChange(newTitle) {
      console.log('title changed to', newTitle);
    }

    function getArticle() {
      return ArticlesService.getById($stateParams.id).then(function(article) {
        vm.article = article;
        vm.title = vm.article.name;
        vm.content= vm.article.content;
        vm.articleNewTitle= vm.title;
        vm.articleNewContent= vm.content;
        return vm.article;
      });
    }
  }

})();
