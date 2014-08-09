angular.module('quotes', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/quotes', {
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesIndexController'
    });
  }]);
