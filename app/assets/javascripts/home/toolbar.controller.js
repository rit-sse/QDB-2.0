(function(){
  angular
    .module('qdb.home')
    .controller('ToolbarController', ToolbarController);

  function ToolbarController($state){
    var tabs = ['qdb.index', 'qdb.quotes.index', 'qdb.tags.index'];
    var vm = this;

    vm.goTo = function(state) {
      $state.go(state);
      document.getElementById('drawerPanel').togglePanel();
    }

    vm.search = '';

    vm.searchQuotes = function() {
      console.log(vm.search);
      $state.go('qdb.quotes.search', { query: vm.search });
      searchToggle();
    }
  }
})();
