angular.module('QDB').controller('TagsIndexController',
  ['$scope', '$http', function($scope, $http){
    $http.get('/qdb/api/tags.json')
      .success(function(data){
        $scope.tags = data;
      });
  }]
);
