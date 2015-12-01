(function() {
    'use strict';

    angular
        .module('wrtd.articles')
        .constant('ArticlesConfig', {
            'hasChangedTimer': 1000,
            'saveAfterInterval': 1000
        });

})();
