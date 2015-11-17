angular.module('ng.resource',[])
.factory('API', ['$resource', function($resource){
	var API = {};
	var $Domain = "http://127.0.0.1:3031";
	API.technology = $resource($Domain, null, {
		get:{ method:"GET",url: $Domain + "/public/audio/list" },
		file: { method:"GET", url: $Domain + "/public/audio/list/:id", params : {id: "@id"}, transformRequest: function(data){
			console.log(232323,data,arguments)
		},transformResponse: function(data){
			console.log(121212,data);
			return null;
		}},
		
	});
	return API;
}])