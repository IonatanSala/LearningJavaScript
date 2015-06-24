"use strict";

// gets assigned to global scope
var goodVariable = 10;

// instantiate the variable in the global scope
// so that you can assign values to it from within functions

var x; // x is undefined

function amIGlobal() {
    x = 10; // x becomes 10!
}

// fails in use strict
// Just don't do this!
// NaN.foobar = true;

// throws an error
// yea, don't delete properties that 
// are set to be unwritable!
// delete Object.prototype;

// good objects do not have duplicate keys
var goodObject = {
    zoo: "animals",
    internet: "trolls",
    treehouse: "students"
}

// only use functions with unique parameter names
function duplicateParameters(a,b,c) {
    return a + b + c
};

// Octal numbers are not allowed!
// yea, don't use octals unless on purpose!
// Just know that you can't carelessly put a 0 in front of
// an integer and then add it to another integer
// Check out the Wikipedia article and Mozilla docs
// In the teacher's notes.
// var someOctal = 500 + 020;

// just don't use 'with'

// delete cannot delete plane variables in strict mode
// can only delete properties
var anObjectWithProps = {
    someProperty: "no, don't delete me!!!"
} 
delete anObjectWithProps.someProperty
