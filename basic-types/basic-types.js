// primitive types
let typed = true;
let temperature = 36.6;
let eyesColor = 'blue';
let absence = null;
let unknown = undefined;
// arrays declaration
let duties = ['cleaning', 'studying', 'working'];
let hobbies = ['music', 'film'];
// tuple
let alphaNumeric = ["one", 1];
// enum
var Planet;
(function (Planet) {
    Planet[Planet["EARTH"] = 0] = "EARTH";
    Planet[Planet["PLUTO"] = 1] = "PLUTO";
})(Planet || (Planet = {}));
let earth = Planet.EARTH;
let pluto = Planet.PLUTO;
// any 
let miscellaneous = [1, "one", true];
// type assertion
// 1.
let greeting = 'Hello!';
let castedGreeting = greeting;
// 2.
let salary = 2500;
let castedSalary = salary;
