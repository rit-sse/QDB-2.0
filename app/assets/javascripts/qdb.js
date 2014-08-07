angular.module('QDB', ['ngRoute'])
  .config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){
    authToken = $("meta[name=\"csrf-token\"]").attr("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
    $routeProvider.when('/', {
      templateUrl: '/qdb/assets/home/home.html'
    })
  }]);
