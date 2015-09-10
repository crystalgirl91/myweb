angular.module('ng.e2eTest', ["ngMockE2E"])
.run(["$httpBackend",function($httpBackend){
	var rows = [{
		title:"h",
		url:"",
		describe:"this is a test of walterfall project,this is a technology use directives to build the system!"
	},{
		title:"h",
		url:"",
		describe:"this is "
	},{
		title:"h",
		url:"",
		describe:"this is a test of walterfall project,this is a technology use "
	},{
		title:"h",
		url:"",
		describe:"this is a test of walterfall project,this is!"
	}];
	$httpBackend.whenGET(/views\//).passThrough();
	$httpBackend.whenGET("/productions").respond(JSON.stringify(rows));
	$httpBackend.whenPOST("/login")
}])