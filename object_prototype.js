//Define the Person constructor
var Person = function(firstName) {
    this.firstName = firstName;
};

Person.prototype.sayHello = function() {
    console.log("Hello Person");
}

//Define the student constructor
//inheritance
function Student(firstName, subject) {
    // call the parent constructor, making sure (using function#call) that "this" is set correctly during the call
    Person.call(this, firstName); //call parent constructor, and bring the properties to Student constructor
    this.subject  = subject;
}


Student.prototype = Object.create(Person.prototype);//To create a student prototype
//Note: new Person() is a wrong way to create prototype.

Student.prototype.constructor = Student; // Set the "constructor" prototype to refer to student

var emily = new Student("Emily", "Computer Science");
emily.sayHello();

// Overwrite the sayHello function from parents class
Student.prototype.sayHello = function() {
    console.log("Hello, I am a student. My name is " + this.firstName);
}

var xueming = new Student("Xueming", "Computer Science");
xueming.sayHello();

console.log(emily instanceof Student);
console.log(emily instanceof Person);

//Encapsulation
//No public or private function
//Using closures, constructors and Anonymous functions for this purpose


//Operator
//the In operator: will tell you if a property exists in an object
//hasOwnProperty method will tell you if a specific property is unique to an object
//For/in loop: To access all the properties in an object
var seafood = {small:"shirimp", big:"sahrk"};
console.log("small" in seafood);
console.log(seafood.hasOwnProperty("toString"));
for(var item in seafood) {
    console.log(item);
}
