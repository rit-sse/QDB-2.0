angular.module('QDB',
  ['ui.router',
  'ng-polymer-elements',])
  .config(['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider){
    authToken = document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
    $locationProvider.html5Mode(true);
    // var urlMatcher = $urlMatcherFactory.compile("/qdb/?goTo");
    $urlRouterProvider.when('/qdb/?goTo', ['$location', '$match', function($location, $match) {
      $location.url('/qdb/' + $match.goTo);
    }]);
    $stateProvider
    .state('qdb', {
      url: '/qdb',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.index', {
      url: '',
      templateUrl: '/qdb/assets/home/home.html'
    })
    .state('qdb.quotes', {
      url: '/quotes',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.quotes.index', {
      url: '',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesIndexController'
    })
    .state('qdb.tags', {
      url: '/tags',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.tags.index', {
      url: ''
    });
  }]);
