import { Component } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';

@Component({
  selector: 'app-obj-props',
  templateUrl: './obj-props.component.html',
  styleUrls: ['./obj-props.component.scss']
})

export class ObjPropsComponent {
  public linksData: ILinksData[] = [
    {
      title: 'Работа с объектами. MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects',
    },
    {
      title: 'Объекты. Современный учебник JS',
      url: 'https://learn.javascript.ru/object'
    }
  ];

  public code: string[] = [
    //0
    `const cat = {
  name: 'Pixel',
  age: 2,
}`,
    //1
    `console.log(cat.name);
console.log(cat.age);`,
    //2
    `cat.color = 'black-and-white';
cat["is cute"] = true;
console.log(cat);`,
    //3
    `{
name: 'Pixel',
age: 2,
color: 'black-and-white',
is cute: true,
}`,
    //4
    `{
name: 'Pixel',
age: 2,
}`,
    //5
    `delete cat.color;
delete cat['is cute'];`,
    //6
    `cat.name === undefined
//false, такое свойство есть
cat.weight === undefined
//true, свойства нет`,
    //7
    `cat = {
  "is cute": true,
}
console.log(cat["is cute"]);`,
//8
`for(const props in cat) {
  console.log(\`\${props}: \${cat[props]}\`);
}`,
`name: Pixel
age: 2`,
  ];

  constructor() { }

}
