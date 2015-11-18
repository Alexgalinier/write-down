(function() {
  'use strict';

  angular
    .module('wrtd.articles')
    .filter('toTrusted', ['$sce', function($sce){
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    }]);

})();


