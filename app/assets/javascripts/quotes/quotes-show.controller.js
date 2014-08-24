(function(){
  angular
    .module('qdb.quotes')
    .controller('QuotesShowController', QuotesShowController);

  function QuotesShowController($http, $location, $stateParams, $rootScope, $state) {
    var vm = this;
    $http.get('/qdb/api/quotes/' + $stateParams.id + '.json')
      .success(function(data){
        vm.quote = data;
      })
      .error(function(data){
        $rootScope.message = 'Not a valid quote';
        $state.go('qdb.index');
      });
  }
})();
