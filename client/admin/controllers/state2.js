angular
  .module('admin.controllers.state2', [])
  .controller('State2Ctrl', [
    '$scope',
    function($scope) {
      $scope.message = "Here's a state 2 message from the controller";
    }
  ])
;
