// primitive types
let typed: boolean = true;
let temperature: number = 36.6;
let eyesColor: string = 'blue';
let absence: null = null;
let unknown: undefined = undefined;

// arrays declaration
let duties: string[] = ['cleaning', 'studying', 'working'];
let hobbies: Array<string> = ['music', 'film'];

// tuple
let alphaNumeric: [string, number] = ["one", 1];

// enum
enum Planet {
    "EARTH", "PLUTO"
}

let earth: Planet = Planet.EARTH;
let pluto: Planet = Planet.PLUTO;

// any
let miscellaneous: any[] = [1, "one", true];

// type assertion
// 1.
let greeting: any = 'Hello!';
let castedGreeting: string = <string>greeting;
// 2.
let salary: any = 2500;
let castedSalary: number = salary as number;
