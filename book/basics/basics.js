'use strict'

// Two slashes start single-line comments

var x; // delcaring a variable

x = 3 + y;  // assigning a value to the variable 'x'

foo(x, y) // calling function 'foo' with parameters 'x' and 'y'
obj.bar(3); // calling method 'bar' of object 'obj'

// A conditional statement
if(x === 0) {
  x = 123;
}

// Defining function 'baz' with parameters 'a' and 'b'
function baz(a, b) {
  return a + b;
}

// Checking for undefined or null
// You can expoit the fact that both undefined and null are considered false
// and therefore can check for them as follows

if(!x) {
  ...
}

// Also note that
// flase, 0, NaN, and '' are also considered false

// Easy way to convert to number and negating a value
var x = '123'
x = +x; // typeof x is now number instead of string
x = -x  // x is now -123 instead of 123

/*

You can call any function in JavaScript with an arbitrary amount of arguments; the language will never complain. It will, however, make all parameters available via the special variable arguments. arguments looks like an array, but has none of the array methods:
> function f() { return arguments }
> var args = f('a', 'b', 'c');
> args.length
3
> args[0]  // read element at index 0
'a'

*/

// Exception Handling

function getPerson(id) {


  if(id < 0) {
    throw new Error('ID must not be negative: ' +id);
  } else {
    return {id: id};  // normaly: retrieved from database
  }
}

function getPersons(ids) {
  var result = [];
  ids.forEach(function(id) {
    try {
      var person = getPerson(id);
      result.push(person);
    } catch(exception) {
      console.log(exception);
    }
  });
}

getPersons([1,-4,3]);



/*

Variables Are Hoisted
Each variable declaration is hoisted: the declaration is moved to the beginning of the function, but assignments that it makes stay put. As an example, consider the variable declaration in line (1) in the following function:
function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3;  // (1)
    }
}
Internally, the preceding function is executed like this:
function foo() {
    var tmp;  // hoisted declaration
    console.log(tmp);
    if (false) {
        tmp = 3;  // assignment stays put
    }
}


*/


// Iterating over arrays

/*

There are several array methods for iterating over elements (see Iteration (Nondestructive)). The two most important ones are forEach and map.
forEach iterates over an array and hands the current element and its index to a function:
[ 'a', 'b', 'c' ].forEach(
    function (elem, index) {  // (1)
        console.log(index + '. ' + elem);
    });
The preceding code produces the following output:
0. a
1. b
2. c
Note that the function in line (1) is free to ignore arguments. It could, for example, only have the parameter elem.
map creates a new array by applying a function to each element of an existing array:
> [1,2,3].map(function (x) { return x*x })
[ 1, 4, 9 ]

*/

// Regular Expressions
