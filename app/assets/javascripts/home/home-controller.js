angular.module('QDB').controller('HomeController', ['$rootScope',
  function($rootScope){
    document.addEventListener('polymer-ready', function(){
      if($rootScope.message){
        var notice = document.querySelector('#notification');
        notice.text = $rootScope.message;
        notice.show();
        $rootScope.message = '';
      }
    });
  }
]);
