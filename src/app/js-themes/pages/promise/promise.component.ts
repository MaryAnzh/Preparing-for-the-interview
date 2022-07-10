import { Component, Input } from '@angular/core';
import { ILinksData } from 'src/app/share/madel/links-list.modet';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})

export class PromiseComponent {
  @Input() public linksData: ILinksData[] = [
    {
      title: 'Promise MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise'
    },
    {
      title: 'Promise. Современный учебник js',
      url: 'https://learn.javascript.ru/promise-basics',
    },
  ];

  public codes: string[] = [
    `const promiseResolve = Promise.resolve('secsess');
    promiseResolve.then(
        (secsess) => console.log(secsess),
        (error) => console.log(error)
    );
    //secsess`,
    `const promiseError = Promise.reject(new Error('OPS!'));
    promiseError.then(
        (secsess) => console.log(secsess),
        (error) => console.log(error)
    );
    //OPS!`,
    `const promiseError = Promise.reject(new Error('OPS!'));
    promiseError.catch(
        (error) => console.log(error)
    );
    //OPS!`

    ];

  constructor() { }

}
