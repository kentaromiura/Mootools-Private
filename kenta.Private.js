/*
 ---

 name: kenta.Private

 description: Private mootator for MooTools 1.3.x

 license: MIT-style license.

 copyright: Carlesso Cristian http://mykenta.blogspot.com

 requires: Class.PatternMutators

 provides: private pattern mutator, '~' cleanup method.

 ...
 */

(function(){
	var Private={};
	Class.defineMutator(/^private\s(.*)/,function(fn, name){

		var getPrivate = function(bind){
			var uid= $uid(bind);
			return Private[uid] || (Private[uid] = {});
		};

		this.define('~', function() {
			var uid = $uid(this);
			delete Private[uid];
		});

		this.define(name, function(){
			var priv = getPrivate(this);
			var args = Array.from(arguments);
			args.push(priv);
			var res = fn.apply(this, args);
			return res;
		});
	});
})();