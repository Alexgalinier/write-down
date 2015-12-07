(function () {
  'use strict';

  angular
    .module('wrtd.articles')
    .service('ArticlesService', ArticlesService);

  function ArticlesService($http) {
    return {
      getAll: getAll,
      getById: getById,
      add: add,
      save: save
    };

    /* ---------------------
     * Public Functions
     * --------------------- */

    function getAll() {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/rest/articles'
      }).then(function(resp) {
        return resp.data;
      });
    }

    function getById(id) {
      return $http({
        method: 'GET',
        url: 'http://localhost:8080/rest/articles/'+id
      }).then(function(resp) {
        return resp.data;
      });
    }

    function add(article) {
      return $http({
        method: 'PUT',
        data: article,
        url: 'http://localhost:8080/rest/articles'
      }).then(function(resp) {
        return resp.data;
      });
    }

    function save(article) {
      return $http({
        method: 'POST',
        data: article,
        url: 'http://localhost:8080/rest/articles/'+article._id
      }).then(function(resp) {
        return resp.data;
      });
    }

    /* ---------------------
     * Private Functions
     * --------------------- */

    // ...
  }
})();
