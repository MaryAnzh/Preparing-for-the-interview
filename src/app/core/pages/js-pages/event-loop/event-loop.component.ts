import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss']
})

export class EventLoopComponent implements OnInit {
  public codes: string[] = [
  `<button (click)="task01()">Show</button>`,
  ]

  public allStringCount: number = 22;

  public stringSelectIterationArr: boolean[] = new Array(2).fill(false);

  public selectStringNumber: number = -1;

  constructor(
    private _viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  task01(): void {
    setTimeout(() => console.log('01. Макро-задача-2, setTimeout-1'), 0);

    console.log('02. Макро-задача-1, log');

    const a = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('03. Макро-задача-3, setTimeout-2 in Promise, log');
        resolve('resolve a');
      }, 0);
    });
    console.log('04. Макро-задача-1, log');
    a.then((resolve) => console.log(`05. Микро-задача-01, then ${resolve}, ждет выполнения  Макро-задачи-3`));

    setTimeout(() => console.log('06.  Макро-задача-4, setTimeout-3'), 0);

    function fun01() {
      console.log('07. Макро-задача-1, log вложенная фукция fun01');

      function fun02() {
        setTimeout(() => console.log('08.  Макро-задача-5, setTimeout-4, вложенная функция fun02'), 0);
        console.log('09. Макро-задача-1, log, вложенная функция fun02');
        a.then((resolve) => console.log(`10. Макро-задача-3, ${resolve}, ждет выполнения Макро-задачи-3`));
      }
      fun02();
    }
    fun01();

    const b = new Promise((resolve, reject) => {
      console.log('11, Макро-задача-1, Promise');
      resolve('resolve b');
    });

    b.then((resolve) => console.log(`12. Микро-задача-3 b.then, результат выполнения промиса уже есть в Макро-задаче-1`));
    console.log('13. Макро-задача-1, последний log');
  }

  selectedCodeStrinOnClick() {
    this.selectStringNumber++;
    if (this.selectStringNumber === 0) {
      this.scrollFn('eventLoopPre');
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber !== 0 && this.selectStringNumber < this.allStringCount) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber === this.allStringCount) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.selectStringNumber = -1;
    }
  }

  scrollFn(anchor: string): void {
    this._viewportScroller.scrollToAnchor(anchor);
  }
}
