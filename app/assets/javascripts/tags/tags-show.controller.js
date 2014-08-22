(function(){
  angular
    .module('qdb.tags')
    .controller('TagsShowController', TagsShowController);

  function TagsShowController($http, $location, $stateParams, $state){
    var vm = this;

    $http.get('/qdb/api/quotes.json?by_tag=' + $stateParams.tag + '&page=' + $stateParams.page)
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
    vm.title = $stateParams.tag;

    vm.goBack = function(){
      $state.go('qdb.tags.show', {page: vm.page-1, tag: $stateParams.tag});
    }

    vm.goAhead = function(){
      $state.go('qdb.tags.show', {page: vm.page+1, tag: $stateParams.tag});
    }
  }
})();
