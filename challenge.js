class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method to check if the animal is the same type as another animal
    isSameType(animal) {
      return this.constructor === animal.constructor;
    }
  
    // Method to check if the animal can interact with another animal
    canInteract(animal) {
      return (
        (this.isSameType(animal) && this instanceof Lion) ||
        (this instanceof Elephant && animal instanceof Lion) ||
        (this instanceof Monkey && animal instanceof Lion)
      );
    }
  
    // Method to interact with another animal
    interact(animal) {
      if (this.canInteract(animal)) {
        if (this.isSameType(animal)) {
          console.log(`${this.name} forms a pride with ${animal.name}.`);
        } else if (this instanceof Elephant) {
          console.log(`${animal.name} flees from ${this.name}.`);
        } else if (this instanceof Monkey) {
          console.log(`${this.name} climbs up a tree when meeting ${animal.name}.`);
        }
      } else {
        console.log(`${this.name} and ${animal.name} are friendly with each other.`);
      }
    }
  }
  
  class Lion extends Animal {
    constructor(name) {
      super(name);
    }
  }
  
  class Elephant extends Animal {
    constructor(name) {
      super(name);
    }
  }
  
  class Monkey extends Animal {
    constructor(name) {
      super(name);
    }
  }
  
  // Test interactions
  const simba = new Lion("Simba");
  const mufasa = new Lion("Mufasa");
  const dumbo = new Elephant("Dumbo");
  const rafiki = new Monkey("Rafiki");
  
  simba.interact(mufasa); // Simba forms a pride with Mufasa.
  simba.interact(dumbo); // Dumbo flees from Simba.
  simba.interact(rafiki); // Rafiki climbs up a tree when meeting Simba.
  
  dumbo.interact(rafiki); // Dumbo and Rafiki are friendly with each other.
  