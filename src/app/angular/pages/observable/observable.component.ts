import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
import { asyncScheduler, scheduled, of, from, fromEvent, Observable, map, Subscribable, Subscription } from 'rxjs';
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
//00
`of(value: null): Observable<null>
of(value: undefined): Observable<undefined>
of(): Observable<never>
of(value: T): Observable<T>
of(value: T): Observable<T>`,

//01 of
`import { of } from 'rxjs';
...
of(1, 2, 3)
.subscribe({
  next: value => console.log('next:', value),
  error: err => console.log('error:', err),
  complete: () => console.log('the end'),
});`,

//02 scheduled
`import { of, asyncScheduler, scheduled } from 'rxjs';

// Deprecated approach
of([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));
// suggested approach
scheduled([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));`,

//03 from
`from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>`,

//04 from
`import { from } from 'rxjs';

const array = [10, 20, 30];
const result = from(array);

result.subscribe(x => console.log(x));`,

//05 fromEvent
`fromEvent<T>(
  target: any,
  eventName: string,
  options?: EventListenerOptions
  | ((...args: any[]) => T), resultSelector?: (...args: any[])
  => T): Observable<T>`,

//06 fromEvent click count
`import { fromEvent } from 'rxjs';
...
  public clickCount$: Observable<number> = of(0);
...
  ngOnInit(): void {
    this.click$ = fromEvent(document, 'click').pipe(
      map((event) => {
        const elem = <HTMLElement>event.target;
        return \`<\${elem.tagName}>\`
      })
    );
  }`,
//07 html
`<p>Клик номер:</p>
<p class="count">{{clickCount$ | async}}</p>`,

//08 fromEvent teg name
`public click$: Observable<string> = of('');
...
ngOnInit(): void {
  this.click = fromEvent(document, 'click').pipe(
    map((event) => {
      const elem = <HTMLElement>event.target;
      return \`<\${elem.tagName}>]\`
    })
  );
}`,
  ];

  public showOfInfo: boolean = false;
  public showFromInfo: boolean = false;
  public showFormEventInfo: boolean = false;

  public clickCount$: Observable<number> = of(0);
  public click$: Observable<string> = of('');

  constructor() { }

  ngOnInit(): void {
    this.click$ = fromEvent(document, 'click').pipe(
      map((event) => {
        const elem = <HTMLElement>event.target;
        return `<${elem.tagName}>`
      })
    );

    let count = 0;
    this.clickCount$ = fromEvent(document, 'click').pipe(
      map(() => {
        return count++
      })
    );

    // const obs = new Observable((sub) => {
    //   sub.next(1);

    //   setTimeout(() => {
    //     sub.next(3);
    //     sub.complete();
    //   }, 2000);
    //   sub.next(2);
    // });

    // obs.subscribe({
    //   next: (vl) => console.log(vl),
    //   error: (err) => console.log('Error: ', err),
    //   complete: () => console.log('Completed')
    // });
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
    ;
  }

  ngonDestroy(): void {

  }

}
