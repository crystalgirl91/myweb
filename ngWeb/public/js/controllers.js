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
.controller("DocumentCtrl", ["$scope", "MusicVisualizer",function($scope,MusicVisualizer){

}])

.controller('TechnologyUploadCtrl', ['$scope', "MusicVisualizer",function($scope,MusicVisualizer) {

}])
.controller('TechnologyAudioCtrl', ['$scope','API',"MusicVisualizer", function($scope,API,MusicVisualizer){
	API.technology.get(function(res){
		$scope.filenames = res.result;
		$scope.palyAudio("1.mp3");
	});

	$scope.palyAudio = function(name){
		MusicVisualizer.play("http://localhost:3031/public/audio/" + name);
	};
}])