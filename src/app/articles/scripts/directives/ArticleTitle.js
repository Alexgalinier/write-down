(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleTitle', articleTitle);

    function articleTitle() {
        return {
            restrict: 'E',
            template: '<div class="article-title" contenteditable="true">{{vm.title}}</div>',

            link: articleTitleLink
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function articleTitleLink(scope, elem, attr) {
            elem.on('keyup', function() {
                scope.vm.articleHasChanged = new Date();
                scope.$apply();
                scope.vm.articleNewTitle = elem.find('div').text();
            });
        }
    }
})();