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
            var elemCopy, dropZone;

            dropZone = document.createElement("div");
            dropZone.className = 'article-name-ghost';

            elem.attr('draggable', true);
            elem.on("dragstart", function(e) {
                elemCopy = this.cloneNode(true);
                elemCopy.style.display = "block";
                elemCopy.style.position = "absolute";
                elemCopy.style.top = "-1000px";
                elemCopy.style.left = "-1000px";
                elemCopy.style.width = elem[0].offsetWidth + "px";
                document.body.appendChild(elemCopy);
                e.dataTransfer.setDragImage(elemCopy, (e.originalEvent.pageX - elem[0].offsetLeft), (e.originalEvent.pageY - elem[0].offsetTop));
            });
            elem.on("dragend", function(e) {
                document.body.removeChild(elemCopy);
            });
            elem.on("dragover", function(e) {
                var pos = (e.originalEvent.target.offsetHeight / 2) - (e.originalEvent.pageY - e.target.offsetTop);
                dropZone.remove();
                (pos > 0) ? elem.before(dropZone) : elem.after(dropZone);
            });
            elem.on("dragleave", function(e) {
                dropZone.remove();
            });

            /*Sortable.create(elem[0], {
                handle: '.grabme',
                draggable: '.articles-name',
                ghostClass: 'article-name-ghost'
            });*/
        }
    }
})();