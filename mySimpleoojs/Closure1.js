/**
 * Created by root on 7/16/15.
 */
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
    function makeFullName () {
        return nameIntro + firstName + " " + lastName;
    }

    return makeFullName ();
}

console.dir(showName ("Michael", "Jackson")); // Your name is Michael Jackson 