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
      templateUrl: '/qdb/assets/tags/index.html',
      controller: 'TagsIndexController'
    })
    .state('qdb.tags.show', {
      url: '/:tag',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'TagsShowController'
    });
  }]);
