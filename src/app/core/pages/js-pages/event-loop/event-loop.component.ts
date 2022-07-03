import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ITaskDate, IConsoleData } from './event-loop.model';
import {
  consoleData,
  macrotaskDate,
  codeDescription,
  microtaskDate
} from './event-loop-date';


@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss']
})

export class EventLoopComponent implements OnInit {
  public codes: string[] = [
    `<button (click)="task01()">Show</button>`,
  ]

  public codeDescription: string[] = codeDescription;

  public consoleData: IConsoleData[] = consoleData;

  public macrotaskDate: ITaskDate[] = macrotaskDate;

  public microtaskDate: ITaskDate[] = microtaskDate;

  public allCommentsStringCount: number = 20;

  public allTasksCount: number = 26;

  public stringSelectIterationArr: boolean[] = [];

  public selectStringNumber: number = -1;

  public showFirstMacroTask: boolean = true;
  public showMacroTasksQueue: boolean = false;

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
    a.then((resolve) => console.log(`05. Микро-задача-01, оработала, после выполнения Макро-задачи-3, setTimeout-2`));

    setTimeout(() => console.log('06.  Макро-задача-4, setTimeout-3'), 0);

    function fun01() {
      console.log('07. Макро-задача-1, log вложенная фукция fun01');

      function fun02() {
        setTimeout(() => console.log('08.  Макро-задача-5, setTimeout-4, вложенная функция fun02'), 0);
        console.log('09. Макро-задача-1, log, вложенная функция fun02');
        a.then((resolve) => console.log(`10. Микро-задача-02, оработала, после выполнения Макро-задачи-3, setTimeout-2`));
      }
      fun02();
    }
    fun01();

    const b = new Promise((resolve, reject) => {
      console.log('11. Макро-задача-1, Promise');
      resolve('resolve b');
    });

    b.then((resolve) => console.log(`12. Микро-задача-3 b.then, результат выполнения промиса уже есть в Макро-задаче-1`));
    console.log('13. Макро-задача-1, последний log');
    // setTimeout(() => {
    //   const b = Promise.resolve([1, 2, 3]);
    //   b.then((resolve) => {
    //     for (let i = 0; i < resolve.length; i++) {
    //       console.log(resolve[i]);
    //     }
    //   });

    // }, 0);

    // const d = Promise.reject('Ошибка');
    // d.catch((reject) => console.log(reject));
  }

  selectedCodeStrinOnClick() {
    this.selectStringNumber++;
    this.showConsoleDataString(this.selectStringNumber);

    if (this.selectStringNumber === 0) {
      this.scrollFn('eventLoopPre');
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber !== 0 && this.selectStringNumber < this.allCommentsStringCount + 1) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber === this.allCommentsStringCount + 1) {
      this.showFirstMacroTask = false;
      this.showMacroTasksQueue = true;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      console.log(this.stringSelectIterationArr[this.selectStringNumber], this.selectStringNumber);
    }
  }

  showConsoleDataString(codeStringNumber: number) {

    switch (codeStringNumber) {
      case 0:
        this.consoleData[0].visible = true;
        break;
      case 3:
        this.consoleData[1].visible = true;
        break;
      case 5:
        this.consoleData[2].visible = true;
        break;

      default:
        break;
    }
  }

  scrollFn(anchor: string): void {
    this._viewportScroller.scrollToAnchor(anchor);
  }
}
