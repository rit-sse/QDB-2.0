angular.module('admin').controller('AdminIndexController', ['$scope', '$http', '$state',
  function($scope, $http, $state){
    $http.get('/qdb/api/admin/quotes.json').success(function(data){
      $scope.quotes = data;
    });

    document.addEventListener('quote-approve', function(event) {
      var quote = event.detail.id;
      var index = event.detail.index;
      var notice = document.querySelector('#notification');
      $http.post('/qdb/api/quotes/' + quote + '/approve.json').success(function(){
        notice.text = 'Successfully approved!'
        notice.show();
        $scope.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem approving the quote.'
        notice.show();
      });
    });

    document.addEventListener('quote-deny', function(event) {
      var quote = event.detail.id;
      var index = event.detail.index;
      var notice = document.querySelector('#notification');
      $http.post('/qdb/api/quotes/' + quote + '/deny.json').success(function(){
        notice.text = 'Successfully denied!'
        notice.show();
        $scope.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem denying the quote.'
        notice.show();
      });
    });

    document.addEventListener('quote-edit', function(event) {
      var quote = event.detail.id;
      $state.go('qdb.admin.edit', {id: quote});
    });
  }
]);
