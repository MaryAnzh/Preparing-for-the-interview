import { Component, Input } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
import { IMethods } from 'src/app/share/model/description.model';
import { methods } from './data';

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

  @Input() currentMethod: IMethods | null = null;

  public codes: string[] = [
    `const promiseResolve = Promise.resolve('success');
    promiseResolve.then(
        (success) => console.log(success),
        (error) => console.log(error)
    );
    //success`,
    `const promiseError = Promise.reject(new Error('OPS!'));
    promiseError.then(
        (success) => console.log(success),
        (error) => console.log(error)
    );
    //OPS!`,
    `const promiseError = Promise.reject(new Error('OPS!'));
    promiseError.catch(
        (error) => console.log(error)
    );
    //OPS!`

  ];

  @Input() public methods: IMethods[] = methods;

  constructor() { }

  showMethodInfoOnClick(index: number) {
    this.currentMethod = this.methods[index];
  }

  closeMethodInfoOnClick() {
    this.currentMethod = null;
  }
}
