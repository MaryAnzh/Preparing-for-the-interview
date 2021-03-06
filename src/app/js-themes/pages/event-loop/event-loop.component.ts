import { Component, Input, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ITaskDate, IConsoleData } from './event-loop.model';
import {
  consoleData,
  macrotaskDate,
  codeDescription,
  microtaskDate,
  microtaskinAwait
} from './event-loop-date';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ILinksData } from 'src/app/share/madel/links-list.modet';


@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss'],
  animations: [
    trigger('showTask', [
      state('in', style({ marginLeft: '0' })),
      transition('void => *', [
        style({ marginLeft: '200px' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({
          marginLeft: '-100px',
          background: 'white',
        })),
      ])
    ]),
  ],
})

export class EventLoopComponent implements OnInit {
  @Input() public linksData: ILinksData[] = [
    {
      title: 'JavaScript EventLoop MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop',
    },
    {
      title: 'Событийный цикл: микрозадачи и макрозадачи . Современный учебник JS',
      url: 'https://learn.javascript.ru/event-loop',
    },
    {
      title: 'Как устроен Event Loop в JavaScript: параллельная модель и цикл событий',
      url: 'https://highload.today/kak-ustroen-event-loop-v-javascript-parallelnaya-model-i-tsikl-sobytij/#:~:text=Event%20Loop%20выполняет%20одну%20простую,стек%20вызовов%2C%20который%20его%20запустит.'
    },
  ]

  public codes: string[] = [
    `<button (click)="task01()">Show</button>`,
  ]

  public codeDescription: string[] = codeDescription;

  public consoleData: IConsoleData[] = consoleData;

  public macrotaskDate: ITaskDate[] = macrotaskDate;

  public microtaskDate: ITaskDate[] = microtaskDate;

  public microtaskinAwait: ITaskDate[] = microtaskinAwait;

  public allCommentsStringCount: number = 20;

  public allTasksCount: number = 29;

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
      console.log('11. Макро-задача-1, log из Promise');
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
    this.ShowInteractive(this.selectStringNumber);

    if (this.selectStringNumber === 0) {
      for (let i = 0; i < this.consoleData.length; i++) {
        this.consoleData[i].visible = false;
      }
      this.scrollFn('eventLoopPre');
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber !== 0 && this.selectStringNumber < this.allCommentsStringCount + 1) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber > this.allCommentsStringCount && this.selectStringNumber < this.allTasksCount) {
      this.showFirstMacroTask = false;
      this.showMacroTasksQueue = true;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
    } else {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.showFirstMacroTask = true;
      this.showMacroTasksQueue = false;
      this.resetTask(this.macrotaskDate);
      this.selectStringNumber = -1;
    }
  }

  ShowInteractive(codeStringNumber: number) {

    switch (codeStringNumber) {
      case 0:
        this.consoleData[0].visible = true;
        this.macrotaskDate[0].visible = true;
        this.macrotaskDate[0].select = true;
        break;
      case 2:
        this.macrotaskDate[1].visible = true;
        break;
      case 3:
        this.consoleData[1].visible = true;
        break;
      case 5:
        this.macrotaskDate[2].visible = true;
        break;
      case 6:
        this.consoleData[2].visible = true;
        break;
      case 7:
        this.microtaskinAwait[0].visible = true;
        break;
      case 8:
        this.macrotaskDate[3].visible = true;
        break;
      case 11:
        this.consoleData[3].visible = true;
        break;
      case 14:
        this.macrotaskDate[4].visible = true;
        break;
      case 15:
        this.consoleData[4].visible = true;
        break;
      case 16:
        this.microtaskinAwait[1].visible = true;
        break;
      case 18:
        this.consoleData[5].visible = true;
        break;
      case 19:
        this.microtaskDate[2].visible = true;
        break;
      case 21:
        this.macrotaskDate[0].select = false;
        this.macrotaskDate[0].visible = false;
        break;
      case 22:
        this.microtaskDate[2].select = true;
        this.consoleData[6].visible = true;
        break;
      case 23:
        this.microtaskDate[2].select = false;
        this.microtaskDate[2].visible = false;
        this.macrotaskDate[1].select = true;
        this.consoleData[7].visible = true;
        break;
      case 24:
        this.macrotaskDate[1].select = false;
        this.macrotaskDate[1].visible = false;
        this.macrotaskDate[2].select = true;
        this.macrotaskDate[2].visible = true;
        this.consoleData[8].visible = true;
        this.resetTask(this.microtaskinAwait);
        this.microtaskDate[0].visible = true;
        this.microtaskDate[1].visible = true;
        break;
      case 25:
        this.macrotaskDate[2].select = false;
        this.macrotaskDate[2].visible = false;
        this.microtaskDate[0].select = true;
        this.consoleData[9].visible = true;
        break;
      case 26:
        this.microtaskDate[0].select = false;
        this.microtaskDate[0].visible = false;
        this.microtaskDate[1].select = true;
        this.consoleData[10].visible = true;
        break;
      case 27:
        this.microtaskDate[1].select = false;
        this.microtaskDate[1].visible = false;
        this.macrotaskDate[3].select = true;
        this.consoleData[11].visible = true;
        break;
      case 28:
        this.macrotaskDate[3].select = false;
        this.macrotaskDate[3].visible = false;
        this.macrotaskDate[4].select = true;
        this.consoleData[12].visible = true;
        break;
      case 29:
        this.macrotaskDate[4].select = false;
        this.macrotaskDate[4].visible = false;
        break;
      default:
        break;
    }
  }

  resetTask(array: ITaskDate[]) {
    for (let i = 0; i < array.length; i++) {
      array[i].select = false;
      array[i].visible = false;

    }
  }

  scrollFn(anchor: string): void {
    this._viewportScroller.scrollToAnchor(anchor);
  }
}
