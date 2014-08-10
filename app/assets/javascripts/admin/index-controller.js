angular.module('QDB').controller('IndexController', ['$scope', '$http', function($scope, $http){
  $http.get('/qdb/api/admin/quotes.json').success(function(data){
    $scope.quotes = data;
  });
}]);
