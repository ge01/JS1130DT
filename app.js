/*
JavaScript Has Dynamic Types
JavaScript has dynamic types. This means that the same variable can be used as
different types:
*/

var x;               // Now x is undefined
var x = 5;           // Now x is a Number
var x = "John";      // Now x is a String

/*
JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
*/
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"';

document.getElementById("demo").innerHTML =
carName1 + "<br>" +
carName2 + "<br>" +
answer1 + "<br>" +
answer2 + "<br>" +
answer3;
