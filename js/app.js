let app = angular.module("littleF", []);

app.controller("productController", ($scope) => {
  $scope.products = products;
});