angular.module('quotes', ['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('qdb.quotes', {
      url: '/quotes',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.quotes.index', {
      url: '?page',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesIndexController'
    })
    .state('qdb.quotes.search', {
      url: '/search?query',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesSearchController'
    })
    .state('qdb.quotes.show', {
      url: '/:id',
      templateUrl: '/qdb/assets/quotes/show.html',
      controller: 'QuotesShowController'
    });
  }]);
