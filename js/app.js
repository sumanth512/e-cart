var app =angular.module("myApp",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "../data/categories.html",
            // controller: "categoriesCtrl"
        })
        .when("/products/:name", {
            templateUrl : "../data/products.html",
            controller: "productsCtrl"
        })
        .when("/product-view/:name", {
            templateUrl : "../data/productsview.html",
            controller: "productViewCtrl"
        })
        .when("/cart", {
            templateUrl : "../data/cartview.html",
            controller:"cartCtrl"
        })
        .when("/login",{
            templateUrl : "../data/login.html",
            controller:"loginCtrl"
        })

});