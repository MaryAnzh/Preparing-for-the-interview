import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';
import { of, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-about',
  templateUrl: './observable-about.component.html',
  styleUrls: ['./observable-about.component.scss']
})

export class ObservableAboutComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'observable, angdev.ru',
      url: 'https://angdev.ru/rxjs/observable/'
    },
    {
      title: 'observable, bxnotes.ru',
      url: 'https://bxnotes.ru/conspect/lib/angular/angular-5-the-complete-guide/observable'
    },
    {
      title: 'observable, rxjs.dev',
      url: 'https://rxjs.dev/api/index/class/Observable'
    }
  ];

  public subArr: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    console.clear();

    const sumObserver = {
      sum: 0,
      next(value: number): void {
        console.log('Adding: ' + value);
        this.sum = this.sum + value;
      },
      error(): void {
        // We actually could just remove this method,
        // since we do not really care about errors right now.
      },
      complete(): void {
        console.log('Sum equals: ' + this.sum);
      }
    };
    // Synchronously emits 1, 2, 3 and then completes.
   const sub = of(1, 2, 3)
      .subscribe(sumObserver);
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
