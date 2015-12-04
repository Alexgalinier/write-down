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

            if (scope.article.level > 1) {
                elemClass = 'articles-sub-lvl-' + scope.article.level;
            }

            elem.addClass(elemClass);
        }
    }
})();