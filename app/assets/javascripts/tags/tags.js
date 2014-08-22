angular.module('tags',['ui.router'])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
    .state('qdb.tags', {
      url: '/tags',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.tags.index', {
      url: '',
      template: JST['tags/index'](),
      controller: 'TagsIndexController'
    })
    .state('qdb.tags.show', {
      url: '/:tag?page',
      template: JST['quotes/index'](),
      controller: 'TagsShowController'
    });
  }]);
