(function() {
  angular
    .module('qdb.admin')
    .controller('LoginController', LoginController);

  function LoginController($http, $state){
    var vm = this;
    vm.submit = function(){
      var notice = document.querySelector('#notification')
      $http.post('/qdb/api/authorize.json', vm.user).success(function(){
        $state.go('qdb.admin.index');
        notice.text = 'Successfully logged in!';
        notice.show();
      }).error(function(data){
        notice.text = data.notice;
        notice.show();
      });
    }
  }
})();
