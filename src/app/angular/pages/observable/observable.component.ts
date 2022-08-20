import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
import { asyncScheduler, scheduled, of, from, fromEvent, Observable, map } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'rotate(-90deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('.3s')
      ]),
    ]),
  ]
})

export class ObservableComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'observable, angdev.ru',
      url: 'https://angdev.ru/rxjs/observable/'
    },
    {
      title: 'observable, bxnotes.ru',
      url: 'https://bxnotes.ru/conspect/lib/angular/angular-5-the-complete-guide/observable'
    },
  ];

  public code: string[] = [
    `of(value: null): Observable<null>
of(value: undefined): Observable<undefined>
of(): Observable<never>
of(value: T): Observable<T>
of(value: T): Observable<T>`,
    `import { of } from 'rxjs';
...
of(1, 2, 3)
.subscribe({
  next: value => console.log('next:', value),
  error: err => console.log('error:', err),
  complete: () => console.log('the end'),
});`,
    `import { of, asyncScheduler, scheduled } from 'rxjs';

// Deprecated approach
of([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));
// suggested approach
scheduled([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));`,
    `from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>`,
    `import { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));`,
    `fromEvent<T>(
  target: any,
  eventName: string,
  options?: EventListenerOptions
  | ((...args: any[]) => T), resultSelector?: (...args: any[])
  => T): Observable<T>`,
    `import { fromEvent } from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(() => this.clickCount++ );`
  ];

  public showOfInfo: boolean = false;
  public showFromInfo: boolean = false;
  public showFormEventInfo: boolean = false;

  public clickCount: number = 0;
  public click: Observable<string> = new Observable();

  constructor() { }

  ngOnInit(): void {
    this.fromEventExample();
  this.click = fromEvent(document, 'click').pipe(
    map((event) => {
      const elem = <HTMLElement>event.target;
      console.log(elem.tagName);
      return `<${elem.tagName}>`
    })
  );
  }

  ofExample(): void {
    of(10, 20, 30)
      .subscribe({
        next: value => console.log('next:', value),
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),
      });
  }

  scheduledExample(): void {

  }

  fromExample(): void {
    const array = [10, 20, 30];
    const result = from(array);

    result.subscribe(x => console.log(x));
  }

  fromEventExample(): void {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(() => this.clickCount++);
  }

}
