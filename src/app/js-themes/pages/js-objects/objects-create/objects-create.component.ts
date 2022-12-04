import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';
import { objectCreateSample } from './data';

@Component({
  selector: 'app-objects-create',
  templateUrl: './objects-create.component.html',
  styleUrls: ['./objects-create.component.scss']
})

export class ObjectsCreateComponent {
  public linksData: ILinksData[] = [
    {
      title: 'Объекты, Современный учебник JS',
      url: 'https://learn.javascript.ru/object',
    },
    {
      title: 'Object, MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object',
    },

  ];

  public code: string[] = [
    //0
    `const obj = {
    name: 'Mari',
    sayHi: function() { alert(\`Hi, \$\{this.name\}\`) },
  };`,
    //1
`const user = new Object();
user.name = 'Mari';
user['is admin'] = true;`,
    //2
`{name: 'Mari', is admin: true}`,
    //3
`function User(name, age) {
  this.name = name;
  this.age = age;
}
console.log(new User('Masha', 30))`,
    //4
`{name: 'Masha', age: 30}`,
    //5
    `const obj = {
  a: 1,
  b: 2,
}
const obj2 = Object.assign({}, obj);
const obj3 = { ...obj };
const obj4 = JSON.parse(JSON.stringify(obj));

console.log(obj === obj2); // false
console.log(obj === obj3); // false
console.log((obj == obj4)); // false`,
    //6
    `class User {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  sayHi() {
      const hi = \`Hi, $\{this.name\}\`;
      alert(hi);
  }
}

const max = new User('Max', 35);
max.sayHi();`,
    //7
    objectCreateSample[0],
    //8
    objectCreateSample[1],
    //9
    objectCreateSample[2],
    //10
    objectCreateSample[3],
    //11
    objectCreateSample[4],
    //12
    `function User(name, age) {
  return {
      name,
      age,
  }
}
const user = new User('Masha', '30');
console.log(user);`,
  ];

  constructor() { }

  sayHi(): void {
    const obj = {
      name: 'Mari',
      sayHi: function (): void { alert(`Hi, ${this.name}`) },
    };
    obj.sayHi();
  }

}
