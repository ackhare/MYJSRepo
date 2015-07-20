/**
 * Created by chetan on 18/7/15.
 */
//fix this inside closure

var user = {
	tournament:"The Masters",
	data :[
	{name:"T. Woods", age:37},
	{name:"P. Mickelson", age:43}
	],
	​
	clickHandler:function () {

	// the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.​
        var theUserObj = this;
	this.data.forEach (function (person) {
	// But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.​
	// This inner function cannot access the outer function's "this"​

	console.log ("What is This referring to? " + this); //[object Window]​
        console.log (person.name + " is playing at " + theUserObj.tournament);
	// T. Woods is playing at undefined​
	// P. Mickelson is playing at undefined​
	})
	}
	​
	}
	​
	user.clickHandler(); // What is "this" referring to? [object Window]
//this inside the anonymous function cannot access the outer
// function’s this, so it is bound to the global window object,
// when strict mode is not being used.

