(function() {
  angular
    .module('qdb.admin')
    .controller('AdminQuoteEditController', AdminQuoteEditController);

  function AdminQuoteEditController($state, $http, $stateParams){
    var vm = this;

    var path = '/qdb/api/quotes/' + $stateParams.id + '.json'
    $http.get(path).success(function(data){
      vm.quote = data;
      vm.quote.tags = _.pluck(vm.quote.tags, 'name').join(' ');
    });

    vm.cancel = function(){
      $state.go('qdb.admin.index');
    }

    vm.submit = function(){
      var params = {
        quote: vm.quote,
        tags: vm.quote.tags
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
