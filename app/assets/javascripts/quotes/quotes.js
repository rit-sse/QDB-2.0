(function(){
  angular
    .module('quotes', ['ui.router'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
    .state('qdb.quotes', {
      url: '/quotes',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.quotes.index', {
      url: '?page',
      template: JST['quotes/index'](),
      controller: 'QuotesIndexController'
    })
    .state('qdb.quotes.search', {
      url: '/search?query&page',
      template: JST['quotes/index'](),
      controller: 'QuotesSearchController'
    })
    .state('qdb.quotes.show', {
      url: '/:id',
      template: JST['quotes/show'](),
      controller: 'QuotesShowController'
    });
  }
})();
