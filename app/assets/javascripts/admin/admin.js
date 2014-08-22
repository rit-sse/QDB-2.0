(function(){
  angular
    .module('admin', ['ui.router'])
    .config(config);

  function config($stateProvider) {
    var checkLoggedIn = function($q, $timeout, $http, $state, $rootScope){
      var deferred = $q.defer();
      $http.get('/qdb/api/logged_in.json').success(function(user){
        if (user.signed_in){
          $timeout(deferred.resolve, 0);
        }
        else {
          $rootScope.message = 'You need to be logged in to view that';
          $timeout(function(){deferred.reject();}, 0);
          $state.go('qdb.index');
        }
      });
    }
    $stateProvider
    .state('qdb.admin', {
      url: '/admin',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.admin.login', {
      url: '/login',
      template: JST['admin/login'](),
      controller: 'LoginController'
    })
    .state('qdb.admin.logout',{
      url: '/logout',
      controller: 'LogoutController'
    })
    .state('qdb.admin.index', {
      url: '',
      template: JST['admin/index'](),
      controller: 'AdminIndexController',
      resolve: {
        loggedIn: checkLoggedIn
      }
    })
    .state('qdb.admin.edit', {
      url: '/quotes/:id/edit',
      template: JST['admin/edit'](),
      controller: 'AdminQuoteEditController',
      resolve: {
        loggedIn: checkLoggedIn
      }
    });
  }
})();
