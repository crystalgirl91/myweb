angular.module('mainApp', ["ngRoute","ngResource","ng.controller","ui.bootstrap","ng.directive","ng.resource","tech.audio","ng.e2eTest"])
.config(["$routeProvider","testProvider",function($routeProvider,testProvider){

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
	.when("/technology/audio", {
		templateUrl: "views/technology/audio_stream.html",
		controller: "TechnologyAudioCtrl"
	})
	.when('/manage',{
		templateUrl: "views/manage.html",
		controller: "manageCtrl"
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
				console.log(err)
				return $q.reject(err); 
			},
			responseError: function(err){
				console.log("resError",err)
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