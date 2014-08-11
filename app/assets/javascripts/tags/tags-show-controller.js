angular.module('tags').controller('TagsShowController',
  ['$scope', '$http', '$location', '$stateParams', '$state',
  function($scope, $http, $location, $stateParams, $state){
    $http.get('/qdb/api/quotes.json?by_tag=' + $stateParams.tag + '&page=' + $stateParams.page)
      .success(function(data){
        $scope.quotes = data.quotes;
        $scope.first_page = data.first_page;
        $scope.last_page = data.last_page;
        if($scope.first_page){
          $scope.page = 1;
        }else{
          $scope.page = parseInt($stateParams.page);
        }
      });
    $scope.title = $stateParams.tag;

    $scope.goBack = function(){
      $state.go('qdb.tags.show', {page: $scope.page-1, tag: $stateParams.tag});
    }

    $scope.goAhead = function(){
      $state.go('qdb.tags.show', {page: $scope.page+1, tag: $stateParams.tag});
    }
  }]
);
