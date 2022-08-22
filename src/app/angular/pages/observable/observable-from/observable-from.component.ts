import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-observable-from',
  templateUrl: './observable-from.component.html',
  styleUrls: ['./observable-from.component.scss']
})

export class ObservableFromComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'from, RsJs.dev',
      url: 'https://rxjs.dev/api/index/function/from',
    }
  ];

  public code: string[] = [
    //00 from
`from<T>(input: ObservableInput<T>, scheduler?: SchedulerLike): Observable<T>`,

    //01 from
`import { from } from 'rxjs';
...
  const array = [10, 20, 30];
  const result = from(array);
...
  result.subscribe({
    next: (v) => console.log(v),
    complete: () => {
      console.log('The End');
    },
  });`,
  ];

  public subArr: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    console.clear();
    console.log("Пример from:");
    this.fromExample();
  }

  fromExample(): void {
    const array = [10, 20, 30];
    const result = from(array);

    const sub = result.subscribe({
      next: (v) => console.log(v),
      complete: () => {
        console.log('The End');
      },
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
