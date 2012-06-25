describe("Private.js", function(){
	var Test = new Class({
		Implements: [Options, Events],
		options: {
			name : 'Test'
		},
		'private initialize': function(options, privs){
			this.setOptions(options);
			privs.uniqueID = String.uniqueID();
			privs.name = privs.uniqueID + '.' + this.options.name;
		},
		'private method': function(params, privs){
			return privs.name;
		},
		'private getUnique': function(privs){
			return privs.uniqueID;
		},
		'private setup': function(methods, privs){
			var self = this;
			Object.each(methods, function(value, name){
				privs[name] = value.bind(self);
			})
		},
		'private issue': function(name, privs){
			return privs[name]();
		}
	})

	it("can be used to pass private properties around", function(){
		var test = new Test({name:'Toio'});
		var uniqueID = test.getUnique();
		expect(test.method({})).to.be(uniqueID + '.' + 'Toio');
	})

	it("can be used to pass private methods around", function(){
		var myPrivateMethods = {
			doStuff: function(){
				return this.options.name.replace(/T/g, 's');
			}
		};
		var test = new Test({name:'Toronto'});
		test.setup(myPrivateMethods);
		expect(test.issue('doStuff')).to.be('soronto');
	})
})