angular.module('quotes').controller('QuotesIndexController',
  ['$scope', '$http', function($scope, $http){
    $http.get('/qdb/quotes.json').success(function(data){
      $scope.quotes = data;
    });
    $scope.title = 'Quotes';
  }]
);
