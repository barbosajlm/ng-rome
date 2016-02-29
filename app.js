/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate',		//additional angular modules
'ng-rome'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', '$romeProvider', function($routeProvider, $locationProvider, $compileProvider, $romeProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/ng-rome/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/ng-rome/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';	
	
	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});
	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	$romeProvider
		.setOption('time', false)
		.setOption('inputFormat', 'YYYY-MM-DD');
	
}]);