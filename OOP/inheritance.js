class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
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

  

//   In this example, Dog is a subclass that extends the Animal class. The Dog class inherits the properties and methods of the Animal class. The speak() method is overridden in the Dog class.

// I hope this helps! Let me know if you have any more questions.