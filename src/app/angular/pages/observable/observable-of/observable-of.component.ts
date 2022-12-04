import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';
import { Observable, Observer, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-of',
  templateUrl: './observable-of.component.html',
  styleUrls: ['./observable-of.component.scss']
})

export class ObservableOfComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'of, rxjs.dev',
      url: 'https://rxjs.dev/api/index/function/of',
    },
    {
      title: 'Deprecation Notes',
      url: 'https://rxjs.dev/deprecations/scheduler-argument'
    }
  ];

  public code: string[] = [
    //00
    `of(value: null): Observable<null>
of(value: undefined): Observable<undefined>
of(): Observable<never>
of(value: T): Observable<T>`,

    //01
    `import { of } from 'rxjs';
...
ngOnInit(): void {
  of(1, 2, 3)
    .subscribe({
      next: value => console.log('next:', value),
      error: err => console.log('error:', err),
      complete: () => console.log('the end'),
    });
}`,

    //02 scheduled
    `import { of, asyncScheduler, scheduled } from 'rxjs';
// Deprecated approach
of([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));
// suggested approach
scheduled([1, 2, 3], asyncScheduler).subscribe((x) => console.log(x));`,
  ];

  public subArr: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    console.clear();
    console.log("Пример of:");
    this.ofExample();
  }

  ofExample(): void {
    const sub = of(1, 2, 3)
      .subscribe({
        next: value => console.log('next:', value),
        error: err => console.log('error:', err),
        complete: () => console.log('the end'),
      });
      this.subArr.push(sub);
  }

  ngOnDestroy(): void {
    console.clear();
    this.subArr.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
