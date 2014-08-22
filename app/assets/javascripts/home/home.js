(function(){
  angular
    .module('qdb.home', ['ui.router'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
    .state('qdb.index', {
      url: '',
      template: JST['home/index'](),
      controller: 'HomeController as home'
    })
  }
})();
