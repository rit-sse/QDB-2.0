angular.module('quotes').controller('QuotesIndexController',
  ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/qdb/quotes.json').success(function(data){
      $scope.quotes = data;
    });
    $scope.title = 'Quotes';

    $scope.goToTag = function(tag) {
      $location.path('tags/' + tag);
    }
  }]
);
