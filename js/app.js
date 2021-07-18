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

app.controller("productController", ($scope) => {
  $scope.products = products;
  $scope.productTypes = [
    {name: 'Pakaian', kategori: 'pakaian'},
    {name: 'Buku', kategori: 'buku'},
    {name: 'Lain-lain', kategori: 'lain-lain'}
  ];
});