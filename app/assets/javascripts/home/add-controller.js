(function(){
  angular
    .module('home')
    .controller('AddController', AddController);

  function AddController($scope, $http){

    $scope.quote = {}

    $scope.cancel = function() {
      document.querySelector('#addDialog').toggle();
    }

    $scope.submit = function() {
      var request = {
        quote: $scope.quote,
        tags: $scope.tags
      }
      var notice = document.querySelector('#notification')
      $http.post('/qdb/api/quotes.json', request)
        .success(function(){
          notice.text = 'Succesfully submitted quote!';
          notice.show();
          document.querySelector('#addDialog').toggle();
        }).error(function(){
          notice.text = 'There was a problem submitting your quote.'
          notice.show();
        });
    }
  }
})();
