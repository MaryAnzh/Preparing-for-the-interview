export const objectCreateSample = [
//00
  `const obj = Object.create(null);
console.log(obj); `,
//01
`function Proto(name) {
    this.name = name;
    this.sayHi = () => alert(\`Hello, \${this.name}\`);
};

const obj2 = Object.create(new Proto('Max'));
console.log(obj2);`,
//02
`const param = {
    age:
        { value: 30 },
}

const obj3 = Object.create(new Proto('Mari'), param);
console.log(obj3);`,
`Proto {}
[[Prototype]]: Proto
name: "Max"
sayHi: () => alert(\`Hello, \${this.name}\`)
[[Prototype]]: Object`,
`Proto {age: 30}
age: 30
[[Prototype]]: Proto
name: "Mari"
sayHi: () => alert(\`Hello, \${this.name}\`)
[[Prototype]]: Object`,
];
