var color = "blue"; //global variable
function printColor() {
    var color = "purple"; //local variable
    console.log(color);//print purple
}

printColor(); //purple
console.log(color); //blue

var x = 3;

function numSquar(x){
    return x*x;
}

var sentence = "The square of " + x + " is equal to " + numSquar(x);
console.log(sentence);

//self running/invoking functions
//A self-invoking expression is invoked right after its created. This is basically used for avoiding naming conflict as well for achieving enxapsulation
//The variables or declared objects are not accessible outside this function

(function () {
    var x = "Hello, I invoked myself!!"; // I will invoke myself
    console.log(x);
})();

// Enclosures -- Interesting, you can actually return a function  
//Can access all the variables
//Use references instead of reference
function makeName (firstName, lastName) {
    function makeFullName(middleName) {
        var fullName = firstName + " " + middleName + " " + lastName;
        console.log("The full name is " + fullName);
    }
    return makeFullName;//It returns a function !!!
}

var myName = makeName("Emily", "He");
myName("X");


function theLocation() {
    var city = "Uppsala";

    return {
        get: function(){
                 console.log("Current city is " + city);
             },
        set: function(newCity){
                 city = newCity;
             }
    }
}

var myPlace = theLocation();
myPlace.get();
myPlace.set("Lund");
myPlace.get();

//JQuery --JS language
//smaller version of JS
//Always start your JQuery with "$"
//<script>
//$(this).hide();
//$("p").hide();
//$(".test").hide();
//</script>


//Anonymous functions
//functions w/o names
//dynamically declared at runtime
//used in various ways
//  1. as function expression
//  in an object 
//  as an event handler
//  As an self evoking function
//  Common uses are for recursion and enclosures
var myName = function (firstName, lastName) {
    console.log("Full name is " + firstName + " " + lastName);
    return myName;
}// variable, cannot be called until myName is declared, unlike named function
var emily = myName;
emily("Xueming", "He");

/*
 * Different types of Anonymous functions
 * */

//in an object
var pony = {
    sayName: function(name) {
                 console.log("My name is " + name);
             }
};

//JQuery, event handler
//$("p").click = function(){
//    alert("My name is Pony");
//}

//Self invoking function

(function () {
    console.log("My name is Pony");
})();

//Recursion
//since this function does not have a name, to call the function again you use the arguments.callee local variable
//factorial function
var factorial1  = function(n) {
    return !(n > 1) ? 1 : arguments.callee(n-1) * n;
};

var factorial2 = function(n) {
    return (n <= 1)? 1 : arguments.callee(n-1)* n;
};

console.log(factorial1(10));
console.log(factorial2(10));

//Errors and Exceptions
//try ... catch ...finally
//  only programmer generated and runtime exceptions can be caught syntax errors will not be
//throw statement
//the onerror() method


//Object
var developerEngineer = {}; // empty object
var devEngineer = {
    name: "Emily",
    somcID: "23060814",
    manager: "WM Y",
    message: function(text) {
        var msg = text + "\n Best," + "\n/Emily"
    }
};
var devEng = new Object;
devEng.name = "Emily";
devEng.somcID = "23060812";
devEng.startYear = "2013";

console.log(devEngineer);
console.log(devEng);

//Delete a property. Cannot delete properties inherited
delete devEngineer.manager;
console.log(devEngineer);
console.log(devEngineer["somcID"]);


//Constructor prototype

function fruit(name, color) {
    console.log("A new fruit is created");
    this.type = function() {
        console.log("Fruit");
    }
    this.name = name;
    this.color = color;
}

var orange = new fruit("orange", "orange");
orange.type();
console.log(orange);
orange.taste = function() {
    this.taste = "sweet"
};
orange.taste();
console.log(orange);
//Prototype Object
//every object has a prototype and every prototype is an object

var banana = new fruit("banana", "yellow");
console.log(banana);

fruit.prototype.taste = function() {
    this.taste = "sweet";
    console.log(this.taste);
}

console.log(banana);

var vegetable = function() {
    this.type = "veggie";
}

vegetable.prototype.print = function() {
    console.log("Veggies are good for you");
}
var carrot = new vegetable();
carrot.print();

