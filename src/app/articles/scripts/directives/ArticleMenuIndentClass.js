(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleMenuIndentClass', articleMenuIndentClass);

    function articleMenuIndentClass() {
        return {
            restrict: 'A',

            link: menuIndentLink
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function menuIndentLink(scope, elem, attr) {
            var elemClass = '';

            if (scope.article.id.split('.').length > 1) {
                elemClass = 'articles-sub-lvl-' + (scope.article.id.split('.').length - 1);
            }

            elem.addClass(elemClass);
        }
    }
})();