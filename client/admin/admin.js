angular
  .module('admin', [
    'ui.router',
    'chieffancypants.loadingBar',
    'admin.controllers.home',
    'admin.controllers.state1',
    'admin.controllers.state2',
  ])
  .config([
    '$httpProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    function($httpProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
      // Expose XHR requests to server
      $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

      // Disable URL hashes
      $locationProvider.html5Mode(true);

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          templateUrl: 'admin/templates/home.html'
        })
        .state('state1', {
          url: '/state1',
          controller: 'State1Ctrl',
          templateUrl: 'admin/templates/state1.html'
        })
        .state('state2', {
          url: '/state2',
          controller: 'State2Ctrl',
          templateUrl: 'admin/templates/state2.html'
        })
      ;
      // Default URL
      $urlRouterProvider.otherwise('/');
    }
  ])
;
