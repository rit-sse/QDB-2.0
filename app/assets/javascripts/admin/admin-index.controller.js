(function() {
  angular
    .module('qdb.admin')
    .controller('AdminIndexController', AdminIndexController);

  function AdminIndexController($http, $state){
    var vm = this;

    $http.get('/qdb/api/admin/quotes.json').success(function(data){
      vm.quotes = data;
    });

    vm.approveQuote = function(event) {
      var quote = event.detail.id;
      var index = event.detail.index;
      var notice = document.querySelector('#notification');
      $http.put('/qdb/api/quotes/' + quote + '/approve.json').success(function(){
        notice.text = 'Successfully approved!'
        notice.show();
        vm.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem approving the quote.'
        notice.show();
      });
    }

    vm.denyQuote = function(event) {
      var quote = event.detail.id;
      var index = event.detail.index;
      var notice = document.querySelector('#notification');
      $http.put('/qdb/api/quotes/' + quote + '/deny.json').success(function(){
        notice.text = 'Successfully denied!'
        notice.show();
        vm.quotes.splice(index, 1);
      }).error(function(){
        notice.text = 'There was a problem denying the quote.'
        notice.show();
      });
    }

    vm.editQuote = function(event) {
      var quote = event.detail.id;
      $state.go('qdb.admin.edit', {id: quote});
    }
  }

})();
