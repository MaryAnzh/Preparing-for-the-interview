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

  public codeDescription: string[] = [
    'Создание Макро-задачи-1, при клике на кнопку "Show in Console"',
    'Вызов функции task01(), ассоциированной Макро-задаче-1, помещение контекста ее выполнения на верх стека вызова',
    'Создание Макро-задачи-2, отправка ее в очередь макро-задач',
    'Выполнение функции',
    'Создание Promise',
    'Создание Макро-задачи-3, отправка ее в очередь макро-задач',
    'Выполнение функции',
    'Создание Микро-задачи-01, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-3',
    'Создание Макро-задачи-4, отправка ее в очередь макро-задач',
    'Вызов fun01()',
    'Выполнение fun01()',
    'Выполнение функции',
    'Вызов fun02()',
    'Выполнение fun02()',
    'Создание Макро-задачи-5, отправка ее в очередь макро-задач',
    'Выполнение функции',
    'Создание Микро-задачи-02, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-3',
    'Создание Promise',
    'Выполнение функции',
    'Создание Микро-задачи-03, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-1',
    'Выполнение функции',
    'Завершение выполнения Макро-задачи-1',

  ]

  public consoleData: string[] = [
    `02. Макро-задача-1, log`,
    `04. Макро-задача-1, log`,
    `07. Макро-задача-1, log вложенная фукция fun01`,
    `09. Макро-задача-1, log, вложенная функция fun02`,
    `11, Макро-задача-1, Promise`,
    `13. Макро-задача-1, последний log`,
    `12. Микро-задача-3 b.then, результат выполнения промиса уже есть в Макро-задаче-1`,
    `01. Макро-задача-2, setTimeout-1`,
    `03. Макро-задача-3, setTimeout-2 in Promise, log`,
    `05. Микро-задача-01, then resolve a, ждет выполнения  Макро-задачи-3`,
    `10. Макро-задача-3, resolve a, ждет выполнения Макро-задачи-3`,
    `06.  Макро-задача-4, setTimeout-3`,
    `08.  Макро-задача-5, setTimeout-4, вложенная функция fun02`
  ];

  public allStringCount: number = 20;

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

    if (this.selectStringNumber === 0) {
      this.scrollFn('eventLoopPre');
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber !== 0 && this.selectStringNumber < this.allStringCount + 1) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber === this.allStringCount + 1) {
      this.showFirstMacroTask = false;
      this.showMacroTasksQueue = true;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      console.log(this.stringSelectIterationArr[this.selectStringNumber], this.selectStringNumber);
    }
  }

  scrollFn(anchor: string): void {
    this._viewportScroller.scrollToAnchor(anchor);
  }
}
