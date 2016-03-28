'use strict';

/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

function NgRome( options ) {	

	var defaultOptions = options;

	var merge = function( obj1, obj2 ){
		var result = {};
		for(var key1 in obj1){	result[key1] = obj1[key1]; }		
		for(var key2 in obj2){ result[key2] = obj2[key2]; }		
		return result;	
	};

	this.getOptions = function() {
		return defaultOptions;
	};

	this.setOptions = function( options ){
		for(var opt in options){			
			defaultOptions[opt] = options[opt];			
		}
	};

	this.Rome = function( element, instanceOptions ){
		this.element = element;
		this.options = merge(defaultOptions, instanceOptions);
	};
}

function romeProvider(){
	var provider = this;
	var romeScriptPath = '';
	var defaultOptions = {};

	provider.setOption = function( option, value ) {
		defaultOptions[option] = value;
		return provider;
	};

	provider.setMultipleOptions = function( options ) {
		for(var opt in options){
			defaultOptions[opt] = options[opt];
		}
		return provider;
	};

	provider.$get = function() {
		return new NgRome(defaultOptions);
	};
}

function romeService( $rome ){

	var service = this;
	var romes = [];

	service.newRome = function( element, instanceOptions ){			
		var instance = rome.find(element);
		var myRome = new $rome.Rome(element,instanceOptions);
		
		if(!instance){
			instance = rome(element, myRome.options);
			romes.push(instance);
		} else {
			instance.restore(myRome.options);
		}
		romes.forEach( function(romeElem) {
			romeElem.refresh();
		});

		return instance;			
	};

	service.destroyRome = function(element){
		var romeIndex = -1;
		var toDestroy = romes.filter(function( romeu, index ){
			if(romeu.associated === element){
				romeIndex = index;
				return true;
			}
			return false;				
		});
		romes.splice(romeIndex, -1);
		toDestroy[0].destroy();
	};

}

function romeDirective( rService ) {	
	var div_id;

	function makeRome( scope , element ){
		rService.newRome( element[0].childNodes[0], scope.options).on('data', function(){
			scope.$evalAsync( submitChanges( scope, element));
		});
	}							

	function submitChanges( scope, element ){
		scope.ngModel = rome.find(element[0].childNodes[0]).getDateString();
	}	

	return {
		restrict: 'AE',
		template: function( elem, attrs ){
			div_id = 'rome_'+attrs.id;
			var html = attrs.romeInline ? '<div id="'+div_id+'"></div>' : '<input id="'+div_id+'"/>';
			return html;
		},
		scope: {
			options: '=?romeOptions',
			romeInline: '=romeInline',
			ngModel: '=ngModel'
		},			
		link: function( scope, element, attrs ) {		
			scope.$watch('ngModel', function(){					
				scope.options = scope.options ? scope.options : {};
				scope.options.initialValue = !rome.find(element[0].childNodes[0]) ? scope.ngModel : '';					
				makeRome(scope, element);				
			});

			scope.$on('$destroy', function() {
        rService.destroyRome(element[0].childNodes[0]);
      });
		}
	};
}

angular.module('ng-rome', [])
	.provider('$rome', romeProvider)
	.service('RomeService', ['$rome', romeService])
	.directive('ngRome', ['RomeService', romeDirective]);



