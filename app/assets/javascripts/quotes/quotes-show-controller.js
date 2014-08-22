(function(){
  angular
    .module('quotes')
    .controller('QuotesShowController', QuotesShowController);

  function QuotesShowController($scope, $http, $location, $stateParams) {
    $http.get('/qdb/api/quotes/' + $stateParams.id + '.json')
      .success(function(data){
        $scope.quote = data;
      });
  }
})();
