angular.module('ng.e2eTest', ["ngMockE2E"])
.run(["$httpBackend","productions",function($httpBackend,productions){
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
	$httpBackend.whenGET("/productions").respond(JSON.stringify(productions));
	$httpBackend.whenPOST("/login");
}])
.value('productions',{
	0:{
		name:"react-ui",
		img:"public/img/reactbg.png",
		href:"framework/react-ui/docs/src/index.html"
	},
	1:{
		name:"es6",
		img:"public/img/reactbg.png",
		href:"framework/es6tutorial/index.html"
	},
	2:{
		name:"es6",
		img:"public/img/reactbg.png",
		href:"framework/es6tutorial/index.html"
	},
	3:{
		name:"es6",
		img:"public/img/reactbg.png",
		href:"framework/es6tutorial/index.html"
	},
	4:{
		name:"es6",
		img:"public/img/reactbg.png",
		href:"framework/es6tutorial/index.html"
	},
	5:{
		name:"es6",
		img:"public/img/reactbg.png",
		href:"framework/es6tutorial/index.html"
	}
})