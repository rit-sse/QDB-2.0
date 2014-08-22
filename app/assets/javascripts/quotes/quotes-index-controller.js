(function(){
  angular
    .module('qdb.quotes')
    .controller('QuotesIndexController', QuotesIndexController);

  function QuotesIndexController($http, $stateParams, $state) {
    var vm = this;
    $http.get('/qdb/api/quotes.json?page='+ $stateParams.page).success(function(data) {
      vm.quotes = data.quotes;
      vm.first_page = data.first_page;
      vm.last_page = data.last_page;
      if(vm.first_page){
        vm.page = 1;
      }else{
        vm.page = parseInt($stateParams.page);
      }
    });
    vm.title = 'Quotes';

    vm.goBack = function() {
      $state.go('qdb.quotes.index', {page: vm.page-1});
    }

    vm.goAhead = function() {
      $state.go('qdb.quotes.index', {page: vm.page+1});
    }
  }
})();
