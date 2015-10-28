angular.module('app').controller('ChipotleMapController', function($scope, ChipotleService) {

  $scope.chipotleData = [];
  $scope.displayZipcode = '';    // zipcode for displaying locations found
  $scope.inputZipcode = ''; // input zipcode
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
    ChipotleService.getLocations($scope.inputZipcode).then(function(data) {
      // No locations were found if function returned no data,
      //   or data that does not contain address objects
      if (data.length > 0 && (typeof data[0].address != "undefined"))  {
          $scope.chipotleData=data;
          $scope.displayZipcode = $scope.inputZipcode; // set after search, for correct display of number of locations
          $scope.map.center = {
            latitude: $scope.chipotleData[0].address.latitude,
            longitude: $scope.chipotleData[0].address.longitude
          };
      }
      else {
        // initialize search data if  no locations found
        $scope.displayZipcode = $scope.inputZipcode; // set after search, for correct display of number of locations
        $scope.initializeSearch();

      }

    });
  };



});
