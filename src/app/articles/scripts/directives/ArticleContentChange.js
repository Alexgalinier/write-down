(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleContentChange', articleContentChange);

    function articleContentChange() {
        return {
            restrict: 'A',

            link: contentChangeLink
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function contentChangeLink(scope, elem, attr) {
            var content = elem.html();
            elem.bind('keyup', function () {
                if (!scope.vm.articleHasChanged) {
                    scope.vm.articleHasChanged = (content != elem.html());
                    scope.$apply();
                }

                scope.vm.articleNewContent = elem.html();
            });
        }
    }
})();