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
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const d = new Dog('Mitzie');
  const c = new Cat('Fluffy');
  
  d.speak(); // Output: Mitzie barks.
  c.speak(); // Output: Fluffy meows.
  


//   In this example, the speak() method is overridden in both the Dog and Cat classes. The speak() method is called on both the Dog and Cat objects, but each object returns a different output.