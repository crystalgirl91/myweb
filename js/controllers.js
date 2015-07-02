angular.module('ng.controller', [])
.controller("HomeCtrl", ["$scope", function($scope){
	
}])
.controller("BlogCtrl", ["$scope", function($scope){
	
}])
.controller("ProductCtrl", ["$scope", function($scope){
	
}])
.controller("DocumentCtrl", ["$scope", function($scope){
	
}])
.controller("mainController",["$scope",function($scope){
	$scope.ip="10.1.41.0";
	$scope.$watch("ip",function(newval){
		console.log("watch##################",newval)
	})
}])