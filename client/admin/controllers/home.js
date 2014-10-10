angular
  .module('admin.controllers.home', [])
  .controller('HomeCtrl', [
    '$scope',
    function($scope) {
      $scope.message = "Here's a message from the controller";
    }
  ])
;
