angular.module('ng.controller', [])
.controller("mainController",["$scope",function($scope){

}])
.controller("HomeCtrl", ["$scope", "$http",function($scope,$http){
	$http.get("/productions").success(function(res){
		$scope.rows = res;
	});
	$scope.config = {
		url:"/documents",
	}

}])
.controller("BlogCtrl", ["$scope", function($scope){
	
}])
.controller("ProductCtrl", ["$scope","$http", function($scope,$http){
	
	
}])
.controller("DocumentCtrl", ["$scope", function($scope){

	$scope.treeConfig = [
		{
			title: "JavaScript", 
			url: "",
			subMenu: [{
				title: "nodeJS",
				url: "",
				subMenu: null
			}]
		},{
			title: "css",
			url: "",
			subMenu: [{
				title: "nodeJS2",
				url: "",
				subMenu: [{
					title: "nodeJS4",
					url: "",
					subMenu: [{
						title: "nodeJS",
						url: "",
						subMenu: null
					}]
				}]
			},{
				title: "nodeJS3",
				url: "",
				subMenu: null
			}]
		},{
			title: "JavaScript", 
			url: "",
			subMenu: null
		}
	];
	
}])

.controller('TechnologyUploadCtrl', ['$scope', function ($scope) {
	console.log(222)

	
}])