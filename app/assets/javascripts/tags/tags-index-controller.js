(function() {
  angular
    .module('tags')
    .controller('TagsIndexController', TagsIndexController);

  function TagsIndexController($scope, $http) {
    $http.get('/qdb/api/tags.json')
      .success(function(data){
        $scope.tags = data;
      });
  }
})();
