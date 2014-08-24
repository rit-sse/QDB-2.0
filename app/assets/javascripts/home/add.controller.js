(function(){
  angular
    .module('qdb.home')
    .controller('AddController', AddController);

  function AddController($http){
    var vm = this;
    vm.quote = {}

    vm.cancel = function() {
      document.querySelector('#addDialog').toggle();
    }

    vm.submit = function() {
      var request = {
        quote: vm.quote,
        tags: vm.tags
      }
      var notice = document.querySelector('#notification')
      $http.post('/qdb/api/quotes.json', request)
        .success(function(){
          notice.text = 'Quote submitted for moderation!';
          notice.show();
          document.querySelector('#addDialog').toggle();
        }).error(function(){
          notice.text = 'There was a problem submitting your quote.'
          notice.show();
        });
    }
  }
})();
