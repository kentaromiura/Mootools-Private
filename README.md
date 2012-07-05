Mootools-Private
================

Private is a mutator which let you write code which use a sort of private properties and methods

How to use
----------

Just include keeto.PatternMutator.js and kenta.Private.js, then you can write code like the snippet below:

	var Test = new Class({
		Implements:[Options],
		'private initialize':function(options, _private){
			this.setOptions(options);
			_private.test = 'Hello, '+ (options.name || 'world!');
		},
		'private say':function(i_can_call_this_as_i_want){
			alert(i_can_call_this_as_i_want.test);
		},
		a_normal_method:function(){
			alert("I don't use privates");
		}
	});

	var kenta = new Test({name:'kenta'});
	kenta.say();
	kenta.a_normal_method();

	var test2 = new Test({});
	test2.say();

	//when done
	test2['~']();
	kenta['~']();​

in order to access the private method/properties you must decorate the method name adding 'private' just before the method name.

mykenta.blogspot.com
-----------------
here you can find other infos:
http://mykenta.blogspot.it/2011/10/mootools-private-pattern-mutator.html

