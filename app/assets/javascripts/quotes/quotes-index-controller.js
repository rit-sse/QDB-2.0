angular.module('QDB').controller('QuotesIndexController',
  ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/qdb/api/quotes.json').success(function(data){
      $scope.quotes = data;
    });
    $scope.title = 'Quotes';

    $scope.goToTag = function(tag) {
      $location.path('tags/' + tag);
    }
  }]
);
