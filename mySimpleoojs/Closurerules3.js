/**
 * Created by root on 7/16/15.
 */

//Closures Gone Awry

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function ()  {
            return uniqueID + i;
        }
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
var stalloneID = createIdForActionCelebs [0];  
console.log(stalloneID.id()); // 103
/*
since the outer function runs the entire for loop and returns the last value of i,
which is 103 while expected value was 101 for 1st record
To fix this side effect of closure use IIFE
See RemovingClosureSideEffect
 */