# Basic TypeScript Concepts

## Basic Types
Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null and Undefined
TypeScript enhances JavaScript types with additional annotations.

``` ts
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
```

### Advanced Types
Any, Unknown, and Never
Use unknown when the type is not known and requires type assertion to be used. never is used for values that never occur.
``` ts
let notSure: unknown = 4;
notSure = "maybe a string instead";
function error(message: string): never { throw new Error(message); }
```

### Type Assertions
Explicitly telling the compiler to treat an entity as a different type.

``` ts
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
```
### Interfaces
Interfaces in TypeScript are used to type-check whether an object fits a certain structure.

``` ts
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
```
## Classes and Objects

### Classes and Inheritance

Classes support base features of object-oriented programming: inheritance, encapsulation, and polymorphism.

``` ts
class Animal {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```
### Access Modifiers
Public, Private, and Protected
Control visibility of member functions and properties in classes

``` ts
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}
// new Animal("Cat").name; // Error: 'name' is private;
```

### Abstract Classes
Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.

``` ts
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // must be implemented in derived classes
}
```
# Functions

## Function Types
Enforces the function to match a specific structure

``` ts
let myAdd: (x: number, y: number) => number =
  function(x: number, y: number): number { return x + y; };
```

## Optional, Default, and Rest Parameters
Enhances function flexibility with optional and default parameters, and rest parameters for variadic functions

``` ts
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
function buildName(firstName: string, lastName = "Smith") {
  // default param
  return firstName + " " + lastName;
}
function buildNames(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```

## Overload Signatures
Allows multiple function forms, enhancing functionality through type checks

``` ts
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
  // implementation with type checks
}
```

# Enums and Namespaces

## Enums
Adds support for enums, a way of giving more friendly names to sets of numeric values

``` ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
## Namespaces
Used to organize code and avoid collisions in the global scope

``` ts
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}
```
