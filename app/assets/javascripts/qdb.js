angular.module('QDB', ['ngRoute', 'ng-polymer-elements'])
  .config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){
    authToken = document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
    $routeProvider.when('/', {
      templateUrl: '/qdb/assets/home/home.html'
    })
  }]);
