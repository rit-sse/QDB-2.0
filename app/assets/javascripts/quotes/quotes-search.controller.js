(function(){
  angular
    .module('qdb.quotes')
    .controller('QuotesSearchController', QuotesSearchController);

  function QuotesSearchController($http, $location, $stateParams, $state) {
    var vm = this;
    
    vm.loading = false;
    vm.container = '#mainContainer';
    
    vm.getPage = function(num) {
      vm.loading = true;
      $http.get('/qdb/api/quotes.json?search=' + $stateParams.query + '&page=' + num).success(function(data) {
        vm.quotes = (!vm.quotes) ? data.quotes : vm.quotes.concat(data.quotes);
        vm.first_page = data.first_page;
        vm.last_page = data.last_page;
        if(vm.first_page){
          vm.page = 1;
        }else{
          vm.page = num;
        }
        vm.loading = false;
      });
    }
    vm.getPage(1);
    
    vm.getNextPage = function() {
      if (!vm.last_page) {
        vm.getPage((vm.page || 0) + 1);
      }
    }
    
    vm.title = $stateParams.query;
  }
})();
