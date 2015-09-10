angular.module("ng.directive", [])
.directive("ipInput", ["$compile",function($compile){
	return {
		restrict:"EA",
		require:"ngModel",
		link:function(scope,element,attrs,ctrl){
			var ngModelCtrl = ctrl;

			var popEl = angular.element("<div ip-input-wrap></div>");
			var $input = $compile(popEl)(scope);
			element.after($input);

			// model -- ui
			ngModelCtrl.$render = function(){
				var modelVal = ngModelCtrl.$modelValue;
				if(modelVal){
					modelVal.split(".").forEach(function(i,idx){
						if(i){
							scope["seg" + (idx + 1)] = i;
						}
					});
					setValidate();
				}
			}
			function setValidate(){
				var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/ ;
				var isValid = reg.test(ngModelCtrl.$modelValue);
				ngModelCtrl.$setValidity("ip",isValid);
			}

			// ui -- model
			$input.on("input",function(e){
				scope.$apply(function(){
					var val = scope.seg1 + "." +scope.seg2 + "."+scope.seg3 + "."+scope.seg4;
					
					ngModelCtrl.$setViewValue(val);
					ngModelCtrl.$render();
				})
			});
		}
	}
}])
.directive("ipInputWrap",function(){
	return {
		restrict: "AE",
		replace: true,
		template: '<span><input ng-model="seg1"><input ng-model="seg2"><input ng-model="seg3"><input ng-model="seg4"></span>',
		linck: function(){

		}
	}
})
.directive("uiTree", [function(){
	return {
		scope:{
			config:"=uiTree"
		},
		restrict: "A",
		template: "<div id='wraper' class='uiTree'></div>",
		link: function(scope, element, attrs){
			var data = scope.config;
			var fragment = document.createDocumentFragment();
			if(data instanceof Array === false){
				throw Error("expect an Array")
				return;
			}
			function creatDOM(data,depend){
				var ul = document.createElement("ul");
				for(i in data){
					var child = document.createElement("li");
					child.innerHTML = "<a href="+ data[i].url +">"+ data[i].title +"</a>";
					if(data[i].subMenu){
						child.className = "parent";
						creatDOM(data[i].subMenu,child);
					}
					ul.appendChild(child);
				};
				depend.appendChild(ul);
			}
			function extendMenu(target){
				var ele = $(target.parentElement);
				ele.siblings(".parent").removeClass("on");
				ele.hasClass("on") ? ele.removeClass("on") : ele.addClass("on");
			}
			creatDOM(data,fragment);
			element.find("#wraper").append(fragment.cloneNode(true));
			element.on("click","a",function(e){
				if(this.nextSibling && this.nextSibling.nodeName.toUpperCase() === 'UL'){
					e.preventDefault();
					extendMenu(this);
				}
			});

		}
	};
}])
.directive("uploadFile", [function(){
	return {
		restrict: "AE",
		replace:"true",
		scope:{config : "=uploadFileConfig"},
		template: '<div><input type="file" multiple="true"><button type="submit"></button></div>',
		link: function(scope, element, attrs){
			var config = scope.config;
			element.find("input").on("change", function(e){
				var files = this.files;
				var xhr = new XMLHttpRequest;
				var formData = new FormData;
				for(var i = 0 ; i < files.length ; i ++){
					formData.append("file",files[i]);
				}
				xhr.open("POST",config.url);
				xhr.upload.onprogress = function(e){
					console.log(e.loaded/e.total*100)
				}
				xhr.onloadEnd = function(){
					console.log("uploadOK",e)
				}
				xhr.send(formData);

			});
		}
	};
}])