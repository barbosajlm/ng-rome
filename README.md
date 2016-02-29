# ng-rome

This module provides a directive to use [Rome](https://github.com/bevacqua/rome) inside your angular app.
If you don't know [Rome](https://github.com/bevacqua/rome), please check is demo page, [here](http://bevacqua.github.io/rome/).

## Dependencies
- required:
	* [Rome](https://github.com/bevacqua/rome)

## Install
1.	**Install from bower** 

	```
	bower install ng-rome
	```

2. include the module in angular - the module name to include is `ng-rome`



## Usage

### @ config

**ng-rome** contains a provider, **$romeProvider** so you could define some settings as default for your application.
Just add **$romeProvider** as a dependencie at config fase.

```
angular
	.module('yourModuleName', ['ng-rome'])
	.config(['$romeProvider', function($romeProvider){
		//Your code goes here
	}])

```

**Methods available:**

#### .setOption( option, value );

This method configures a single option. The option to configure must be identified by name in the attribute `option`.

#### .setMultipleOptions( {options} );  

This method configures multiple options. The attribute `options` MUST BE an object where each field name is the options name.

**NOTE:** To check the default configuration an possible options see [Rome](https://github.com/bevacqua/rome).

### @ code

#### simple usage

To use `ng-rome` just add the tag `<ng-rome ng-model="yourModelGoesHere"></ng-rome>` to your html.

#### options available

* **rome-options**(optional)

With simple usage you get the default configuration plus the custom options you defined on the provider. 
If you want to override that configuration in a specific case you could use the attribute `rome-options` and pass an object 
just like in **.setMultipleOptions( {options} )**.

* **rome-inline**(optional)

True or False(default: false). If you don't specifie this attribute your or sett it to false [Rome](https://github.com/bevacqua/rome) will be an input tag.
Otherwise a `<div>` will show the calendar inline. You can check this at [Rome demo page](http://bevacqua.github.io/rome/)

## Development

1. `git checkout gh-pages`
	1. run `bower install`
	2. write your code then run `grunt`
	3. git commit your changes
2. copy over core files (.js) to master branch
	1. `git checkout master`
	2. `git checkout gh-pages`
3. update README, CHANGELOG, bower.json, and do any other final polishing to prepare for publishing
	1. git commit changes
	2. git tag with the version number, i.e. `git tag v1.0.0`
4. create github repo and push
	1. `git push origin gh-pages`
5. create a PR

## License

The MIT License (MIT)

Copyright © 2016 João Barbosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
