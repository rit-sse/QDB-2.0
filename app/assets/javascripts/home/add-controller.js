angular.module('QDB').controller('AddController', ['$scope', '$http',
  function($scope, $http){

    $scope.quote = {}

    document.addEventListener('add-submitted', function() {
      var request = {
        quote: $scope.quote,
        tags: $scope.tags
      }
      var notice = document.querySelector('#notification')
      $http.post('/qdb/quotes.json', request)
        .success(function(){
          notice.text = 'Succesfully submitted quote!';
          notice.show();
        }).error(function(){
          notice.text = 'There was a problem submitting your quote.'
          notice.show();
        });
    });
  }
]);
