angular
  .module('admin.controllers.state1', [])
  .controller('State1Ctrl', [
    '$scope',
    function($scope) {
      $scope.message = "Here's a state 1 message from the controller";
    }
  ])
;
