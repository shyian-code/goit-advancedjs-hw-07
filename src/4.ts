// Клас Key
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature() {
      return this.signature;
    }
  }
  
  // Клас Person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey() {
      return this.key;
    }
  }
  
  // Абстрактний клас House
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house.');
      } else {
        console.log('The door is closed. Person cannot enter.');
      }
    }
  }
  
  // Клас MyHouse, успадкований від House
  class MyHouse extends House {
    openDoor(key: Key) {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is open.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }
  
  // Використання класів
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);  