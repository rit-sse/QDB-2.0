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
      $http.get('/qdb/api/logged_in.json').success(function(user){
        // Authenticated
        if (user.signed_in){
          $timeout(deferred.resolve, 0);
        }
        // Not Authenticated
        else {
          $rootScope.notLoggedIn = 'You need to be logged in to view that';
          $timeout(function(){deferred.reject();}, 0);
          $state.go('qdb.index');
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
    .state('qdb.admin', {
      url: '/admin',
      abstract: true,
      template: '<div ui-view />'
    })
    .state('qdb.admin.index', {
      url: '',
      templateUrl: '/qdb/assets/admin/index.html',
      controller: 'AdminIndexController',
      resolve: {
        loggedIn: checkLoggedin
      }
    })
    .state('qdb.index', {
      url: '',
      templateUrl: '/qdb/assets/home/home.html',
      controller: 'HomeController'
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
