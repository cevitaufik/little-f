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

app.filter('active', () => {
  return (img) => {
    let active = [];

    angular.forEach(img, (e) => {
      if(active.length == 0) {
        active.push('active')
      } else {
        active.push('')
      }
    })
    return active;
  }
})

app.controller("myController", ($scope) => {
  $scope.owner = owner;
  $scope.products = products;
  $scope.productCategory = category;
});