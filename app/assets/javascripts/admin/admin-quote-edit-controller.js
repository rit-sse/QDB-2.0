(function() {
  angular
    .module('admin')
    .controller('AdminQuoteEditController', AdminQuoteEditController);

  function AdminQuoteEditController($state, $scope, $http, $stateParams){
    var path = '/qdb/api/quotes/' + $stateParams.id + '.json'
    $http.get(path).success(function(data){
      $scope.quote = data;
      $scope.quote.tags = _.pluck($scope.quote.tags, 'name').join(' ');
    });

    $scope.cancel = function(){
      $state.go('qdb.admin.index');
    }

    $scope.submit = function(){
      var params = {
        quote: $scope.quote,
        tags: $scope.quote.tags
      }
      var notice = document.querySelector('#notification');
      $http.put(path, params).success(function(){
        $state.go('qdb.admin.index');
        notice.text = 'Successfully updated quote!';
        notice.show();
      }).error(function(){
        notice.text = 'There was a problem updating the quote';
        notice.show();
      });
    }
  }
})();
