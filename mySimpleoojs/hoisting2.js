/**
 * Created by root on 7/16/15.
 */

// Both the variable and the function are named myName​
var myName;
function myName () {
    console.log ("Rich");
}

// The function declaration overrides the variable name​
console.log(typeof myName); // function



console.log ("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");



// But in this example, the variable assignment overrides the function declaration​
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.​

function myName () {
    console.log ("Rich");
}

console.log(typeof myName); // string