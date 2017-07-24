//Example to prove "" literal string and new String are internally instance of same object
//adding a function to prototype property of constructor function makes it available to all child instances of the same.
String.prototype.star = function(){return "*"+this+"*";};

var str = new String("test");
str.star();
// returns "*test*"

"Hello".star();
// also returns "*Hello*"
// This proves both literal strings and string objects (one created with new keyword) are instance of String type.



//deleting a object property
var aObject = {};

var aObject = { "attribute":"value"};
delete aObject.attribute
//returns true as expected

//Deleting a property of a standard object like Math returns false
delete Math.PI
//returns false





