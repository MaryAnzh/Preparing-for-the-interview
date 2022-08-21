import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event, Navigation } from '@angular/router';
import { of, from, fromEvent, Observable, map, filter, mergeScan, Subscription } from 'rxjs';
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
  public nav: { [key: string]: boolean } = {
    about: false,
    of: false,
    from: false,
    ['from-event']: false,
    new: false,
  }

  public pageName: string = '';


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
    //07 html
    `<p>Количество кликов:</p>
<p class="count">{{clickCount$ | async}}</p>`,

    //08 fromEvent teg name
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

  public showOfInfo: boolean = false;
  public showFromInfo: boolean = false;
  public showFormEventInfo: boolean = false;

  public clickCount$: Observable<number> = of(0);
  public click$: Observable<string> = of('');

  public routerEvents: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.routerEvents = this._router.events.pipe(
      filter((ev: Event): ev is RouterEvent => ev instanceof NavigationStart)
    ).subscribe({
      next: (event: NavigationStart) => {
        const url = event.url.split('/').pop();
        this.pageName = url ?? '';
        for (let key in this.nav) {
          this.nav[key] = (key === this.pageName)
        }
      }
    });
  }

  ngOnInit(): void {
    this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;
    for (let key in this.nav) {
      this.nav[key] = (key === this.pageName)
    }
    this.click$ = fromEvent(document, 'click').pipe(
      map((event) => {
        const elem = <HTMLElement>event.target;
        return `<${elem.tagName}>`
      })
    );

    // const click$ = fromEvent(document, 'click');
    // const one$ = click$.pipe(map(() => 1));
    // const seed = 0;
    // this.clickCount$ = one$.pipe(
    //   mergeScan((acc, one) => of(acc + one), seed)
    // );

    let clickCount = 0;
    this.clickCount$ = fromEvent(document, 'click').pipe(
      map(() => clickCount++)
    )

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

  ngOnDestroy(): void {
    if (this.routerEvents) {
      this.routerEvents.unsubscribe();
    }
  }

}
