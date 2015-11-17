/**
 * Created by chetan on 18/7/15.
 */
var allNumbers = [23, 11, 34, 56];
//directly we cannot enter the array in math.max
// Using the apply () method, we can pass the array of numbers:​
console.log (Math.max.apply (null, allNumbers)); // 56
/*
 As we have learned earlier, the fist argument to apply () sets
 the “this” value, but “this” is not used in the Math.max () method, so we pass null.
 */
