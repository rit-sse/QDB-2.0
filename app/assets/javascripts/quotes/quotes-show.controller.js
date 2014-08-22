(function(){
  angular
    .module('qdb.quotes')
    .controller('QuotesShowController', QuotesShowController);

  function QuotesShowController($http, $location, $stateParams) {
    var vm = this;
    $http.get('/qdb/api/quotes/' + $stateParams.id + '.json')
      .success(function(data){
        vm.quote = data;
      });
  }
})();
