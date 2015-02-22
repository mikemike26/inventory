angular.module('inventoryApp').directive('inputNumber', function(){
	return {
		restrict: 'C',
		require: '?ngModel',
		link: function(scope, element, attrs, ngModel) {
			if (!ngModel) return;
            ngModel.$parsers.unshift(function (inputValue) {
            	var digits = inputValue.replace(/[^\d]/g, "");
                ngModel.$viewValue = digits;
                ngModel.$render();
                return digits;
            });
		}
	};
});