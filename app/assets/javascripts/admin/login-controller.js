angular.module('QDB').controller('LoginController', ['$scope', '$http', function($scope, $http){
  $scope.submit = function(){
    var notice = document.querySelector('#notification')
    $http.post('/qdb/api/authorize.json', $scope.user).success(function(){
      notice.text = 'Successfully Logged In!';
      notice.show();
    }).error(function(data){
      notice.text = data.notice;
      notice.show();
    });
  }
}]);
