angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {
    Links.shorten(url)
      .then(function(linkdata) {
        $scope.link = linkdata;
      })
      .catch(function(error){
        console.error(error);
      });
  };
});
