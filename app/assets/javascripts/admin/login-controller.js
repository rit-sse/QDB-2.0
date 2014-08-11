angular.module('admin').controller('LoginController', ['$scope', '$http', '$state',
  function($scope, $http, $state){
    $scope.submit = function(){
      var notice = document.querySelector('#notification')
      $http.post('/qdb/api/authorize.json', $scope.user).success(function(){
        $state.go('qdb.admin.index');
        notice.text = 'Successfully logged in!';
        notice.show();
      }).error(function(data){
        notice.text = data.notice;
        notice.show();
      });
    }
  }
]);
