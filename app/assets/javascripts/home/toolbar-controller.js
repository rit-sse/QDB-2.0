angular.module('QDB').controller('ToolbarController', ['$scope', '$location',
  function($scope, $location){

    $scope.goTo = function(url){
      $location.path(url);
    }
  }
]);
