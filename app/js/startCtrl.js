movieSearchApp.controller('StartCtrl', function ($scope,Dinner) {
	  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

$scope.menu = function() {

  return Dinner.fetchMenu();
}
});