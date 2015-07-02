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
				console.log("render##################",ngModelCtrl)
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
				console.log("valid##################",isValid,ngModelCtrl)
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
