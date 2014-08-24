(function() {
  angular
    .module('qdb.tags')
    .controller('TagsIndexController', TagsIndexController);

  function TagsIndexController($http, $rootScope) {
    var vm = this;
    $http.get('/qdb/api/tags.json')
      .success(function(data){
        vm.tags = data;
      });
  }
})();
