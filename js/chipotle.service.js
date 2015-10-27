angular.module('app').service('ChipotleService', function($http) {
  return {
    getLocations: function(zip) {
      var promise = $http.get('https://infinite-depths-3549.herokuapp.com/restaurants/'
                    + zip).then (function(response) {
                          return response.data;
        });
        return promise;
    }
  };
});
