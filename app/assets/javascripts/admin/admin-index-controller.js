angular.module('admin').controller('AdminIndexController', ['$scope', '$http', '$state',
  function($scope, $http, $state){
    $http.get('/qdb/api/admin/quotes.json').success(function(data){
      $scope.quotes = data;
    });

    $scope.approve = function(quote, index) {
      var notice = document.querySelector('#notification');
      $http.post('/qdb/api/quotes/' + quote + '/approve.json').success(function(){
        notice.text = 'Successfully approved!'
        notice.show();
        $scope.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem approving the quote.'
        notice.show();
      });
    }

    $scope.deny = function(quote, index) {
      var notice = document.querySelector('#notification');
      $http.post('/qdb/api/quotes/' + quote + '/deny.json').success(function(){
        notice.text = 'Successfully denied!'
        notice.show();
        $scope.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem denying the quote.'
        notice.show();
      });
    }

    $scope.edit = function(id) {
      $state.go('qdb.admin.edit', {id: id});
    }
  }
]);
