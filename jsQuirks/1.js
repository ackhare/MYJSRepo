/**
 * Created by chetan on 20/9/15.
 */
//http://davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/
/*
 The MDN docs have some good examples of the quirks,
 including the fact that functions declared with the Function constructor
 don’t inherit their current scope properly (i.e. a closure isn’t formed).

 What this means is that they don’t
 have access to variables in their enclosing scope,
 which isn’t particularly useful:
 */
function foo(){
    var bar = 'blah';

    var first = new Function('console.log(typeof bar)');
    first();   // undefined

    var second = function(){
        console.log(typeof bar);
    }
    second();  // string
}
foo();