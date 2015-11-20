(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleContentChange', articleContentChange);

    function articleContentChange() {
        return {
            restrict: 'A',

            link: contentChange
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function contentChange(scope, elem, attr) {
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