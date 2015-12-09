(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .directive('articleDeleteTooltip', articleDeleteTooltip);

    function articleDeleteTooltip() {
        return {
            restrict: 'A',

            link: articleDeleteTooltipLink
        };

        /* ---------------------
         * Public Functions
         * --------------------- */

        function articleDeleteTooltipLink(scope, elem, attr) {
            var tip;

            elem.on('click', function() {
                if (tip) {
                    elem.removeClass('hover');
                    tip.hide();
                    tip = null;
                    return;
                }

                elem.addClass('hover');
                tip = new Tooltip(getTooltipContent(
                    function() {
                        elem.removeClass('hover');
                        tip.hide();
                        scope.vm.deleteArticle();
                    },
                    function() {
                        elem.removeClass('hover');
                        tip.hide();
                    }))
                    .position(elem[0])
                    .show()
                    .place('bottom-left');
            });
        }

        /* ---------------------
         * Private Functions
         * --------------------- */

        function getTooltipContent(yesCallback, cancelCallback) {
            var content = document.createElement("span")
            var yesBut = document.createElement("input");
            var cancelBut = document.createElement("input");

            yesBut.type = 'button';
            yesBut.value = 'Yes';
            yesBut.className = 'tooltip-but tooltip-primary-but';
            yesBut.addEventListener('click', yesCallback);

            cancelBut.type = 'button';
            cancelBut.value = 'Cancel';
            cancelBut.className = 'tooltip-but';
            cancelBut.addEventListener('click', cancelCallback);

            content.innerHTML = 'You will delete this article, are you sure ?';
            content.appendChild(yesBut);
            content.appendChild(cancelBut);

            return content;
        }
    }
})();