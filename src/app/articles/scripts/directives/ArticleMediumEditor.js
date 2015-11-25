(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .directive('articleMediumEditor', articleMediumEditor);

  function articleMediumEditor() {
    return {
      restrict: 'A',

      link: mediumEditorLink
    };

    /* ---------------------
     * Public Functions
     * --------------------- */

    function mediumEditorLink(scope, elem, attr) {
      var editor = new MediumEditor(elem, {
        placeholder: false,
        toolbar: {
          buttons: ['bold', 'italic', 'quote', 'pre']
        }
      });
    }
  }
})();