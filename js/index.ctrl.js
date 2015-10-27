angular.module('app').controller('ChipotleMapController', function($scope, ChipotleService) {

  $scope.chipotleData = [];
  $scope.zipcode = '';
  $scope.map = {
    center: {
      latitude: 40,
      longitude: -73
    },
    zoom: 11
  };

  // Search for locations with zipcode and place in chipotleData
  // Center the map using the latitude and longitude of the first location
  $scope.searchLocations = function () {
    // initialize chipotleData and map center in case no locations found
    $scope.chipotleData = [];
    $scope.map.center = {
      latitude: 40,
      longitude: -73
    };
    ChipotleService.getLocations($scope.zipcode).then(function(data) {
      if (data.length > 0) {
        if (typeof data[0].address != "undefined") {
          $scope.chipotleData=data;
          $scope.map.center = {
            latitude: $scope.chipotleData[0].address.latitude,
            longitude: $scope.chipotleData[0].address.longitude
          };
        }
      }

    });
  };



});
