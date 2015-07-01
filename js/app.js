angular.module('mainApp', ["ngRoute","ngResource","ng.controller","ui.bootstrap","ng.directive"])
.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/home", {
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	})
	.when("/blog", {
		templateUrl: "views/blog.html",
		controller: "BlogCtrl"
	})
	.when("/product", {
		templateUrl: "views/product.html",
		controller: "ProductCtrl"
	})
	.when("/document", {
		templateUrl: "views/document.html",
		controller: "DocumentCtrl"
	})
	.otherwise({ redirectTo: "/home" })
}])