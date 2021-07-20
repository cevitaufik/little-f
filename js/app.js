let app = angular.module("littleF", []);

app.filter('deleteSpace', () => {
  return (text) => {
    return text.replaceAll(' ', '%20');
  }
})

app.filter('unggulan', () => {
  return (produk) => {
    let filtered = [];

    angular.forEach(produk, (p) => {
      if (p.unggulan) {
        filtered.push(p);
      }
    })
    return filtered;
  }
})

app.filter('ribbon', () => {
  return (product) => {
    if (product) {
      return 'ribbon'
    } else {
      return 'nonribbon'
    }
  }
})

app.controller("myController", ($scope) => {
  $scope.owner = owner;
  $scope.products = products;
  $scope.productCategory = category;
});