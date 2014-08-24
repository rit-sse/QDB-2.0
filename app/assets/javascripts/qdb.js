(function() {
  angular
    .module('QDB', [
      'ui.router',
      'ng-polymer-elements',
      'qdb.home',
      'qdb.tags',
      'qdb.quotes',
      'qdb.admin'])
    .config(config)
    .run(run);

  function config($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider){
    var authToken = document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/qdb');

    $stateProvider
    .state('qdb', {
      url: '/qdb',
      abstract: true,
      template: '<div ui-view />'
    });
  }

  function run($rootScope, $state){
    $rootScope.goToTag = function(event) {
      $state.go('qdb.tags.show', {tag: event.detail.name});
    }

    $rootScope.goToQuote = function(event) {
      $state.go('qdb.quotes.show', {id: event.detail.id});
    }
  }

})();
