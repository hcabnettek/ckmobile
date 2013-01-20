angular.module('ckmobile.service', []);
angular.module('ckmobile.directive', []);
angular.module('ckmobile.filter', []);
angular.module('ckmobile', ['ckmobile.service',
	'ckmobile.directive',
	'ckmobile.filter']);

var ckmobileController = function($scope){
	
};

var indexController = function($scope){
	$scope.foo = true;
};

var loginController = function($scope){
	
};

