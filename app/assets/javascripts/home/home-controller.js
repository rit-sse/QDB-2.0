angular.module('QDB').controller('HomeController', ['$rootScope',
  function($rootScope){
    document.addEventListener('polymer-ready', function(){
      if($rootScope.notLoggedIn){
        var notice = document.querySelector('#notification');
        notice.text = 'You need to be logged in to do that.'
        notice.show();
        $rootScope.notLoggedIn = '';
      }
    });
  }
]);
