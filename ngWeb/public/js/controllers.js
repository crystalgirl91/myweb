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


}])

.controller('TechnologyUploadCtrl', ['$scope', function($scope) {
	console.log(222)
}])
.controller('TechnologyAudioCtrl', ['$scope','API', function($scope,API){
	API.technology.get(function(res){
		$scope.filenames = res.result;
	});

	$scope.palyAudio = function(id){
		console.log("click",id);
		API.technology.file({id: id},function(res){
			console.log(33333333,res)
		});
	};
}])