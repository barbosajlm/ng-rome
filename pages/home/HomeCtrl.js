/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl',  ['$scope', function($scope) {
	
	var vm = this;
	
	vm.left = '2016-02-05';
	vm.right = '2016-02-20';

	vm.leftOptions = {
		dateValidator: rome.val.beforeEq(rome_right)
	};

	vm.rightOptions = {
		dateValidator: rome.val.afterEq(rome_left)
	};

}]);