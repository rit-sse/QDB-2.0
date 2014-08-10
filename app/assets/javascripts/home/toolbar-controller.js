angular.module('QDB').controller('ToolbarController', ['$scope', '$state',
  function($scope, $state){
    var tabs = ['qdb.index', 'qdb.quotes.index', 'qdb.tags.index'];

    $scope.goTo = function(state) {
      $state.go(state);
      document.getElementById('drawerPanel').togglePanel();
    }

    $scope.search = '';

    document.addEventListener('enter-pressed', function(event) {
      console.log(event);
      $state.go('qdb.quotes.search', { query: $scope.search });
      searchToggle();
    });
  }
]);
