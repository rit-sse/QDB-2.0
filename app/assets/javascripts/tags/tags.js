(function(){
  angular
    .module('qdb.tags',['ui.router'])
    .config(config);

  function config($stateProvider) {
    $stateProvider
    .state('qdb.tags', {
      url: '/tags',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.tags.index', {
      url: '',
      template: JST['tags/index'](),
      controller: 'TagsIndexController as tags'
    })
    .state('qdb.tags.show', {
      url: '/:tag?page',
      template: JST['quotes/index'](),
      controller: 'TagsShowController as quotes'
    });
  }
})();
