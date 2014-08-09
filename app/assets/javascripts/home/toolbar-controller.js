angular.module('QDB').controller('ToolbarController', ['$scope', '$state',
  function($scope, $state){
    var tabs = ['qdb.index', 'qdb.quotes.index', 'qdb.tags.index'];

    $scope.goTo = function(state) {
      $state.go(state);
      document.getElementById('drawerPanel').togglePanel();
    }
  }
]);
