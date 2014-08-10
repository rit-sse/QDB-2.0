angular.module('quotes').controller('QuotesIndexController',
  ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/qdb/api/quotes.json').success(function(data){
      $scope.quotes = data;
    });
    $scope.title = 'Quotes';
  }]
);
