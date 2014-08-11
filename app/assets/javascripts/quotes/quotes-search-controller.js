angular.module('quotes').controller('QuotesSearchController',
  ['$scope', '$http', '$location', '$stateParams', '$state',
  function($scope, $http, $location, $stateParams, $state){
    $http.get('/qdb/api/quotes.json?search=' + $stateParams.query + '&page=' + $stateParams.page)
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
    $scope.title = $stateParams.query;

    $scope.goBack = function(){
      $state.go('qdb.quotes.search', {page: $scope.page-1, query: $stateParams.query});
    }

    $scope.goAhead = function(){
      $state.go('qdb.quotes.search', {page: $scope.page+1, query: $stateParams.query});
    }
  }]
);
