// In jQuery
// $(el).addClass(className);

// In native JavaScript

var el = document.getElementsByTagName('h2')[0];

// alert('hi');

// el.classList.add("hi-2");

if(el.classList) {
	el.classList.add('hi-you');
	alert("hi");
} else {
	el.classname += ' ' + 'hi-you2';
	alert("bye");
}