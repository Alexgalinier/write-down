(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleMenuDraggable', articleMenuDraggable);

    function articleMenuDraggable() {
        return {
            restrict: 'A',

            link: menuDraggableLink
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function menuDraggableLink(scope, elem, attr) {
            Sortable.create(elem[0], {
                handle: '.grabme',
                draggable: '.articles-name',
                ghostClass: 'article-name-ghost'
            });
        }
    }
})();