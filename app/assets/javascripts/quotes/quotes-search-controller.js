angular.module('QDB').controller('QuotesSearchController',
  ['$scope', '$http', '$location', '$stateParams',
  function($scope, $http, $location, $stateParams){
    $http.get('/qdb/api/quotes.json?search=' + $stateParams.query)
      .success(function(data){
        $scope.quotes = data;
      });
    $scope.title = $stateParams.query;

    $scope.goToTag = function(tag) {
      $location.path('tags/' + tag);
    }
  }]
);
