import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
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
    `const obj = {
    name: 'Mari',
    sayHi: function() { alert(\`Hi, \$\{this.name\}\`) },
  };`,
    `const user = new Object();
user.name = 'Mari';
user['is admin'] = true;`,
    `{name: 'Mari', is admin: true}`,
    `function User(name, age) {
  this.name = name;
  this.age = age;
}

console.log(new User('Masha', 30))`,
    `{name: 'Masha', age: 30}`,
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
objectCreateSample[0],
objectCreateSample[1],
objectCreateSample[2],
objectCreateSample[3],
objectCreateSample[4],
];

  constructor() { }

  sayHi(): void {
    const obj = {
      name: 'Mari',
      sayHi: function () { alert(`Hi, ${this.name}`) },
    };
    obj.sayHi();
  }

}
