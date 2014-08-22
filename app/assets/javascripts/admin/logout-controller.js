(function() {
  angular
    .module('admin')
    .controller('LogoutController', LogoutController);

  function LogoutController($rootScope, $http, $state) {
    $http.post('/qdb/api/logout.json').success(function(){
      $rootScope.message = 'Successfully logged out!'
      $state.go('qdb.index');
    });
  }
})();
