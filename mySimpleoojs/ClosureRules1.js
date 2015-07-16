/**
 * Created by root on 7/16/15.
 */
//Closures have access to the outer function’s variable even after the outer function returns:
function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
    function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
    //This line is very important if return string then it will give cxertain error on invocation of
    // line 20      ---->   TypeError: string is not a function
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​

// The closure (lastName) is called here after the outer function has returned above​
// Yet, the closure still has access to the outer function's variables and parameter​
mjName("Jackson"); // This celebrity is Michael Jackson 
//njName refers to lastname closure




//On debugging(with a node debugger) the followiung are results
/*
Step into

1)See image name ClosureRules1.png

So as return was lastname closure

it clearly shows Closure has access to firstName,nameIntro

So it entered lastname closure directly
*/
