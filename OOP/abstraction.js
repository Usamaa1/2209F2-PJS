class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      throw new Error('You must implement the speak method.');
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog('Mitzie');
  d.speak(); // Output: Mitzie barks.

  
//   In this example, the Animal class has an abstract method called speak(). The Dog class extends the Animal class and implements the speak() method.