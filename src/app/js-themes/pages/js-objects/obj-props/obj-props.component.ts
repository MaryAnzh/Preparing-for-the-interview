import { Component } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';

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
`const cat = {
  name: 'Pixel',
  age: 2,
}`,
``,
  ];

  constructor() { }

}
