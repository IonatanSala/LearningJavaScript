/*
*
* Explaining the JavaScript promise
*  Using the angular $q library
*  Chaining multiple asynchronous requests
*  Cancelling an $http request
*  A promise is the eventual result of an asynchronous operation
*
*/

promise.then(onSuccess, onFailure);

// if its success this function gets called
var onSuccess = function(data) {

};

// else this one will get called
var onFailure = function(value) {

};

var promise = $http.get('/cards');

promise.then(function(result) {
  // use cards
}, function(result) {
  // failure
})


/**
*                      SUMMURY
* Service > eventual outcome of an asynchronous operation
* Angular uses promises everywhere
* a promise has a 'then' function
* Can register callback functions with the 'then' function for
    -Success
    -failure
* Promises always eiter succeds or fails
*
*/

/*
* Creating and manipulating your own promises using the angular $q library
*
*/

//  defer represents a task that will finish in the future
var deferred = $q.defer();

/*
*                            -----> Task Succeeds ---------> Defereed Status Resolved
* Defered Status Pending : /
*                            -----> Task Fails ---------> Defereed Status Rejected
*/

// If the task succeds you call the resolve method on your defered object
// The method gets on parameter with any type of info which will be the result of the task
deferred.resolve('cool');

// The second method is used to signal that the task has failed.
// This method also gets one parameter, which is the reason of the failure
deferred.reject(new Error('An error has occured'));


var promise = deffered.promise;
promise.then(function(value) {
    alert('success: ' + value);
}, function(value) {
  alert('failure: ' + value) ;
});


/**
*
*                 SUMMURY
* Use $q service to create "deferred" object
* Deffered object -> pending task
* Status: pending, resolved, and Rejected
* Resolove or reject deffered object
* Defered has a property -> promise
*
*
*/
