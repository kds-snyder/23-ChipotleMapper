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

  // Initialize search data
  $scope.initializeSearch = function() {
    $scope.chipotleData = [];
    $scope.map.center = {
      latitude: 40,
      longitude: -73
    };

  };

  // Search for locations with zipcode and place in chipotleData
  // Center the map using the latitude and longitude of the first location
  $scope.searchLocations = function () {

    ChipotleService.getLocations($scope.zipcode).then(function(data) {
      // function might return no data, or data that does not contain address objects
      if (data.length > 0 && (typeof data[0].address != "undefined"))  {
          $scope.chipotleData=data;
          $scope.map.center = {
            latitude: $scope.chipotleData[0].address.latitude,
            longitude: $scope.chipotleData[0].address.longitude
          };

      }
      else {
        // initialize search data if  no locations found
        $scope.initializeSearch();
      }

    });
  };



});
