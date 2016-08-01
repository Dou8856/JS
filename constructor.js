// Call a constructor within a constructor
function Person(firstName) {

    this.firstName = firstName;
    this.privilegedMethod = function() {
        console.log("This is a privileged method, it ca access private members")
    };
};

//To add a function to a prototype, it will be available to all the object
//instances create with the new keyword, and the context within that function 
//will refer to the actual object instance.
Person.prototype.sayHello = function() {
    console.log("Hello, I am " + this.firstName);
};


//Static method.
//In JS, functions are first-class objects, that means you can treat them
//just like any object, in this case, you are only adding a property to the
//function object
//It has no relation with any 'Person' object instance
//like Math.abs()in Java
Person.staticMethod = function() {
    console.log("This is static function");
}


var p1 = new Person("P1");
p1.sayHello();
Person.staticMethod();
//p1.statcMathod() //Error will occur

//To create a new Class Student constructor, and it calls Person constructor
function Student(firstName, subject) {
   this.subject=subject;
   Person.call(this, firstName);
}

