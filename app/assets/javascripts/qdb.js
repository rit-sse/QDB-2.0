angular.module('QDB',
  ['ui.router',
  'ng-polymer-elements'])
  .config(['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider){
    authToken = document.querySelector("meta[name=\"csrf-token\"]").getAttribute("content");
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    var checkLoggedin = function($q, $timeout, $http, $state, $rootScope){
      // Initialize a new promise
      var deferred = $q.defer();
      // Make an AJAX call to check if the user is logged in
      $http.get('/logged_in').success(function(user){
        // Authenticated
        if (user !== '0'){
          $timeout(deferred.resolve, 0);
        }
        // Not Authenticated
        else {
          var notice = document.querySelector('#notification');
          notice.text = 'You need to be logged in to view that';
          $timeout(function(){deferred.reject();}, 0);
          $state.go('qdb.index');
          notice.show();
        }
      });
    }

    $locationProvider.html5Mode(true);

    $urlRouterProvider.when('/qdb/?goTo', ['$location', '$match', function($location, $match) {
      $location.url('/qdb/' + $match.goTo);
    }]);

    $stateProvider
    .state('qdb', {
      url: '/qdb',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.login', {
      url: '/login',
      templateUrl: '/qdb/assets/admin/login.html',
      controller: 'LoginController'
    })
    .state('qdb.index', {
      url: '',
      templateUrl: '/qdb/assets/home/home.html'
    })
    .state('qdb.quotes', {
      url: '/quotes',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.quotes.index', {
      url: '',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesIndexController'
    })
    .state('qdb.quotes.search', {
      url: '/search?query',
      templateUrl: '/qdb/assets/quotes/index.html',
      controller: 'QuotesSearchController'
    })
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
  }])
  .run(function($rootScope, $state){
    $rootScope.goToTag = function(tag) {
      $state.go('qdb.tags.show', {tag: tag});
    }
  });
