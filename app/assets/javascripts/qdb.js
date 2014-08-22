angular.module('QDB',
  ['ui.router',
  'ng-polymer-elements',
  'tags',
  'quotes',
  'admin'])
  .config(['$stateProvider', '$httpProvider', '$locationProvider',
    function($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider){
    authToken = document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('qdb', {
      url: '/qdb',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.index', {
      url: '',
      template: JST['home/home'](),
      controller: 'HomeController'
    })
  }])
  .run(function($rootScope, $state){
    document.addEventListener('tag-clicked', function(event){
      $state.go('qdb.tags.show', {tag: event.detail.name});
    });
    document.addEventListener('quote-clicked', function(event){
      $state.go('qdb.quotes.show', {id: event.detail.id});
    });
  });
