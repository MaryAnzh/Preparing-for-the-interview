import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
import { asyncScheduler, scheduled, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
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
  ];

  constructor() { }

  ngOnInit(): void {
    this.ofExample();
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

}
