import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent, Subscription, map, mergeScan } from 'rxjs';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-observable-from-event',
  templateUrl: './observable-from-event.component.html',
  styleUrls: ['./observable-from-event.component.scss']
})

export class ObservableFromEventComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'FromEvent, Rxjs.dev',
      url: 'https://rxjs.dev/api/index/function/fromEvent',
    }
  ];

  public code: string[] = [
    //00 fromEvent
    `fromEvent<T>(
  target: any,
  eventName: string,
  options?: EventListenerOptions
  | ((...args: any[]) => T), resultSelector?: (...args: any[])
  => T): Observable<T>`,

    //01 fromEvent click count
`import { fromEvent, map, mergeScan } from 'rxjs';
...
  public clickCount$: Observable<number> = of(0);
...
  ngOnInit(): void {
//variant 1
  let clickCount = 0;
  this.clickCount$ = fromEvent(document, 'click').pipe(
  map(() => clickCount++)
    )
  //variant 2
    const click$ = fromEvent(document, 'click');
    const one$ = click$.pipe(map(() => 1));
    const seed = 0;
    this.clickCount$ = one$.pipe(
      mergeScan((acc, one) => of(acc + one), seed)
    );
  }`,

//02 html
`<p>Количество кликов:</p>
<p class="count">{{clickCount$ | async}}</p>`,

//03 fromEvent teg name
`public click$: Observable<string> = of('');
...
 ngOnInit(): void {
  this.click$ = fromEvent(document, 'click').pipe(
    map((event) => {
      const elem = <HTMLElement>event.target;
      return \`<\${elem.tagName}>]\`
    })
  );
  }`,
  ];

  public clickCount$: Observable<Number> = of(0);
  public isClick: boolean = true;
  public click$: Observable<string> = of('Start');

  public subArr: Subscription[] = [];


  constructor() {
    let clickEvent$ = fromEvent(document, 'click');

    let clickCount = 1;
    this.clickCount$ = clickEvent$
      .pipe(
        map(() => {
          this.isClick = false;
          return clickCount++;
        })
      );

    this.click$ = clickEvent$.pipe(
      map((event) => {
        const elem = <HTMLElement>event.target;
        return `<${elem.tagName}>`
      })
    );

    // const click$ = fromEvent(document, 'click');
    // const one$ = click$.pipe(map(() => 1));
    // const seed = 0;
    // this.test = one$.pipe(
    //   mergeScan((acc, one) => of(acc + one), seed)
    // );
  }

  ngOnInit(): void {
    console.clear();
  }

  ngOnDestroy(): void {
    this.isClick = true;
    console.clear();
    this.subArr.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
