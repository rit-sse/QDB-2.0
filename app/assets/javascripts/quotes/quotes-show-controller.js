angular.module('quotes').controller('QuotesShowController',
  ['$scope', '$http', '$location', '$stateParams',
  function($scope, $http, $location, $stateParams){
    $http.get('/qdb/api/quotes/' + $stateParams.id + '.json').success(function(data){
      $scope.quote = data;
    });
  }]
);
