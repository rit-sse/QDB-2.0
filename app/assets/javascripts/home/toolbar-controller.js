angular.module('QDB').controller('ToolbarController', ['$scope', '$location',
  function($scope, $location){
    var tabs = ['quotes', 'tabs'];

    $scope.$watch('selected', function(newValue, oldValue) {
      $location.path(tabs[newValue]);
    });
  }
]);
