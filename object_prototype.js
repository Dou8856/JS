//Define the Person constructor
function Person(firstName) {
    this.firstName = firstName;
};

//Add a method to the Person prototype
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

//To create a new object from the same prototype by using "new" keyword
var emily = new Person("Emily");

//add a new properties to an existing object
//emily.lastName = "He";

//Adding a method to an Object
emily.sum = function(a, b) {
    c = a+b;
    console.log("sum is = " + c);
};


//Add properties to a Prototype
//You cannot add a new property to a prototype as you add a new property to 
//existing object, because the prototype is not an existing object
//One way: to add methods and properties in the constructor
//Another way: using "prototype" property
//Person.prototype.lastName = "X";
Person.prototype.addLastName = function(lastName) {
    console.log("default lastname = " + this.lastName);
    this.lastName = lastName;
    console.log("new lastname = " + this.lastName);
}

console.log(emily);
console.log(Person);
console.log(Person.prototype);
Person.staticSum = function(a,b){
    c = a+b;
    console.log("Person staticSum = " + c);
};

emily.sum(1,2);
emily.addLastName("He");
Person.staticSum(2,9);

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
