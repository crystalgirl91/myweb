angular.module('mainApp', ["ngRoute","ngResource","ng.controller","ui.bootstrap","ng.directive","ng.e2eTest"])
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
	.when("/technology/upload", {
		templateUrl: "views/technology/upload.html",
		controller: "TechnologyUploadCtrl"
	})
	.otherwise({ redirectTo: "/home" })
}])
.config(["$httpProvider",function($httpProvider){
	$httpProvider.interceptors.push(function($q){
		return{
			request: function(config){
				return config;
			},
			requestError: function(err){
				return $q.reject(err);
			},
			responseError: function(err){
				return $q.reject(err);
			},
			response: function(res){
				return res;
			}
		}
	});
}])
.run(["$rootScope",function($rootScope){
	
}])