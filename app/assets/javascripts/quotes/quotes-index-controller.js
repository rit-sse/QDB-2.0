angular.module('quotes').controller('QuotesIndexController',
  ['$scope', '$http', '$stateParams', '$state',
  function($scope, $http, $stateParams, $state){
    $http.get('/qdb/api/quotes.json?page='+ $stateParams.page).success(function(data){
      $scope.quotes = data.quotes;
      $scope.first_page = data.first_page;
      $scope.last_page = data.last_page;
      if($scope.first_page){
        $scope.page = 1;
      }else{
        $scope.page = parseInt($stateParams.page);
      }
    });
    $scope.title = 'Quotes';

    $scope.goBack = function(){
      $state.go('qdb.quotes.index', {page: $scope.page-1});
    }

    $scope.goAhead = function(){
      $state.go('qdb.quotes.index', {page: $scope.page+1});
    }
  }]
);
