(function () {
  'use strict';

  angular
    .module('wrtd.articles')
    .service('ArticlesService', ArticlesService);

  function ArticlesService($q) {
    var mockArticles = fillData();

    return {
      getAll: getAll,
      getById: getById,
      save: save
    };

    /* ---------------------
     * Public Functions
     * --------------------- */

    function getAll() {
      var deferred = $q.defer();

      deferred.resolve(mockArticles);

      return deferred.promise;
    }

    function getById(id) {
      var deferred = $q.defer();

      for(var articleIndex in mockArticles) {
        if (mockArticles[articleIndex].id === id) {
          deferred.resolve(mockArticles[articleIndex]);
        }
      }

      return deferred.promise;
    }

    function save(article) {
      var deferred = $q.defer();

      for(var articleIndex in mockArticles) {
        if (mockArticles[articleIndex].id === article.id) {
          mockArticles[articleIndex] = article;
        }
      }

      deferred.resolve(article);

      return deferred.promise;
    }

    /* ---------------------
     * Private Functions
     * --------------------- */

    function fillData() {
      return [
        {
          id: '1',
          name: "Web",
          content: "Article Web 1"
        },
        {
          id: '1.1',
          name: "Angular",
          content: "Article Angular 1.1"
        },
        {
          id: '1.1.1',
          name: "Extend directives",
          content: "Article dire 1.1.1"
        },
        {
          id: '1.1.2',
          name: "Architecture",
          content: "Article Arch 1.1.2"
        },
        {
          id: '2',
          name: "Movies",
          content: "Article Movies 2"
        },
        {
          id: '3',
          name: "Trips",
          content: "Article Trips 3"
        }
      ];
    }
  }
})();
