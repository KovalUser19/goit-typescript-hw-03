 abstract class House{
   protected door: boolean = false;
   protected tenants: Person[] = [];

   constructor(protected key: Key) { }

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
  constructor(private key: Key) {}
  getKey(): Key{
    return this.key;
  }
}

class Key{
  private signature: number = Math.random();
  getSignature(): number{
    return this.signature;
  }
}

class MyHouse extends House{
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