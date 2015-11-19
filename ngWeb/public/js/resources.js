angular.module('ng.resource',[])
.factory('API', ['$resource', function($resource){
	var API = {};
	var $Domain = "http://127.0.0.1:3031";
	API.technology = $resource($Domain, null, {
		get:{ method:"GET",url: $Domain + "/public/audio/list" },
	});
	return API;
}])