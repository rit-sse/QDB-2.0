angular.module('QDB').controller('TagsShowController',
  ['$scope', '$http', '$location', '$stateParams',
  function($scope, $http, $location, $stateParams){
    $http.get('/qdb/api/quotes.json?by_tag=' + $stateParams.tag)
      .success(function(data){
        $scope.quotes = data;
      });
    $scope.title = $stateParams.tag;

  }]
);
