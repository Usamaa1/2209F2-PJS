class Person {
    #name;
  
    constructor(name) {
      this.#name = name;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(newName) {
      this.#name = newName;
    }
  }
  
  const p = new Person('John');
  console.log(p.name); // Output: John
  
  p.name = 'Jane';
  console.log(p.name); // Output: Jane

//   In this example, the Person class has a private property called name. The name property can only be accessed using the getter and setter methods.

