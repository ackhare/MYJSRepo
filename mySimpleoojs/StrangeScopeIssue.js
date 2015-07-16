/**
 * Created by root on 7/16/15.
 */
for (var i = 1; i <= 10; i++) {
    console.log (i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;​
};

// The variable i is a global variable and it is accessible in the following
// function with the last value it was assigned above ​
function aNumber () {
    console.log(i);
}

// The variable i in the aNumber function below is
// the global variable i that was changed in the for loop above.
// Its last value was 11, set just before the for loop exited:​
aNumber ();  // 11


console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


//Strange setTimeOut issue

// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj​

var highValue = 200;
var constantVal = 2;
var myObj = {
    highValue: 20,
    constantVal: 5,
    calculateIt: function () {
        setTimeout (function  () {
            console.log(this.constantVal * this.highValue);
        }, 2000);
    }
}

// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.​

myObj.calculateIt(); // 400​
// This is an important point to remember.
