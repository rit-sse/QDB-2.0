(function(){
  angular
    .module('qdb.quotes')
    .controller('QuotesSearchController', QuotesSearchController);

  function QuotesSearchController($http, $location, $stateParams, $state) {
    var vm = this;
    $http.get('/qdb/api/quotes.json?search=' + $stateParams.query + '&page=' + $stateParams.page)
      .success(function(data){
        vm.quotes = data.quotes;
        vm.first_page = data.first_page;
        vm.last_page = data.last_page;
        if(vm.first_page){
          vm.page = 1;
        }else{
          vm.page = parseInt($stateParams.page);
        }
      });

    vm.title = $stateParams.query;

    vm.goBack = function() {
      $state.go('qdb.quotes.search', {page: vm.page-1, query: $stateParams.query});
    }

    vm.goAhead = function() {
      $state.go('qdb.quotes.search', {page: vm.page+1, query: $stateParams.query});
    }
  }
})();
