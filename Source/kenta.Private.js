/*
 ---
 name: kenta.Private
 description: Private mootator for MooTools 1.3.x
 authors: Cristian Carlesso http://mykenta.blogspot.com
 copyright: Cristian Carlesso
 license: MIT-style license.
 requires: [Class.PatternMutators]
 provides: [Private]
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