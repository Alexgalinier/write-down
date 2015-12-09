(function () {
  'use strict';

  angular
    .module('wrtd.articles')
    .service('ArticlesService', ArticlesService);

  function ArticlesService($http, PubSubService) {
    return {
      getAll: getAll,
      getById: getById,
      add: add,
      save: save,
      delete: deleteArticle
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
        PubSubService.publish('articles.createdDeleted', resp.data);
        return resp.data;
      });
    }

    function save(article) {
      return $http({
        method: 'POST',
        data: article,
        url: 'http://localhost:8080/rest/articles/'+article._id
      }).then(function(resp) {
        PubSubService.publish('articles.updated', resp.data);
        return resp.data;
      });
    }

    function deleteArticle(article) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:8080/rest/articles/'+article._id
      }).then(function(resp) {
        PubSubService.publish('articles.createdDeleted', resp.data);
      });
    }

    /* ---------------------
     * Private Functions
     * --------------------- */

    // ...
  }
})();
