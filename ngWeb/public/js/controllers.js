angular.module('ng.controller', [])
.controller("mainController",["$scope",function($scope){

}])
.provider('test',function(){
	this.startTime = 2;
	this.$get = function(){
		console.log(11111);
		return "start" + this.startTime + new Date();
	};
})
.controller("HomeCtrl", ["$scope", "$http","$injector","test",function($scope,$http,$injector,test){

	$http.get("/productions").success(function(res){
		$scope.rows = res;
	});

}])
.controller("BlogCtrl", ["$scope","$injector",function($scope,$injector){


	
}])
.controller("ProductCtrl", ["$scope","$http", function($scope,$http){
	
	
}])
.controller("DocumentCtrl", ["$scope", "MusicVisualizer",function($scope,MusicVisualizer){

}])
.controller('manageCtrl', ['$scope', function(scope){
	
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