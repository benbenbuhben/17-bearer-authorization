'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`Hi ${this.name}`);
  }

  static sayHello(tree) {
    console.log('Hey There', tree);
  }
};

let john = new Person('john');
john.talk();
Person.sayHello('life');
Person.talk();
john.sayHello();

let clothes = {'pants':true,'shirt':false};
clothes.keys.forEach()
Object.keys(clothes).forEach()
