 abstract class House{
 protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];
  abstract openDoor(key: Key): void;
  comeIn(person: Person): void{
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log('The door is closed')
    }
  }
}

class Person{
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key{
    return this.key;
  }
}

class Key{
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number{
    return this.signature;
  }
}

class MyHouse extends House{
  constructor(key: Key) {
    super();
    this.key = key;
  }
   openDoor(key: Key): void {
     if (key.getSignature() === this.key.getSignature()) {
       this.door = true;
     } else {
       this.door = false;
     }
 }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};