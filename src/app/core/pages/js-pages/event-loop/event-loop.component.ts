import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-loop',
  templateUrl: './event-loop.component.html',
  styleUrls: ['./event-loop.component.scss']
})

export class EventLoopComponent implements OnInit {
  public codes: string[] = [
    //0
    `//Создвем макро-задачу-1, нажимая на кнопку 'Show'`,
    //1
    `<button (click)="task01()">Show</button>`,
    `//Вызываем функцию, ассоциирующуюся с этой  макро задачей`,
    `task01(): void {`,
    `//Создвем макро-задачу-2, отправляется в конец очереди
      //lop выполняется в контексте Макро-задачи 2
      setTimeout(() => console.log('setTimeout 1.'), 0);
      //Создвем макро-задачу-3, отправляется в конец очереди
      //lop выполняется в контексте Макро-задачи 3
      setTimeout(() => console.log('setTimeout 2.'), 0);
      //Создвем макро-задачу-4, отправляется в конец очереди
      //lop выполняется в контексте Макро-задачи 4
      setTimeout(() => console.log('setTimeout 3.'), 0);

      //log выполняется в контексте Макро-задачи 1
      console.log('1. log task01 (01) (контекст 01)');

      //Promise, выполняется в контексте макро-задачи-1
      //setTimeout создает маеро-задачу-5
      const a = new Promise((resolve, reject) =>

      setTimeout(() => {
          console.log('2. Promise task01 (02) (контекст 01)');
          resolve('3. resolve task01 (03) (контекст 01)');
        }, 0));
      console.log('4. log task01 (04) (контекст 01)');
      a.then((resolve) => console.log(resolve));

      setTimeout(() => console.log('setTimeout 4.'), 0);


      function task02() {
        console.log('5. log task02 (01)(вторая задача) (контекст 02)');
        a.finally(() => console.log('6. finally task02 выполнен (вторая задача) (контекст 01)'));
        function task03() {
          setTimeout(() => console.log('(setTimeout контекст 03)'), 0);
          console.log('6. log task03 (01)((контекст 03))');
          a.finally(() => console.log('6. finally task03 выполнен ((контекст 03))'));
        }
        task03();
      }
      task02();
      a.finally(() => console.log('7. finally выполнен'));
      console.log('8. log -- самый нижний');

    }`,
  ]

  public allStringCount: number = 2;

  public stringSelectIterationArr: boolean[] = new Array(2).fill(false);

  public selectStringNumber: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  task01(): void {
    setTimeout(() => console.log('01. setTimeout 1. контекст макро-задачи-2'), 0);
    setTimeout(() => console.log('02. setTimeout 2. контекст макро-задачи-3'), 0);
    setTimeout(() => console.log('03. setTimeout 3.контекст макро-задачи-4'), 0);

    console.log('04. log контекст Макро-задачи-1');

    const a = new Promise((resolve, reject) => {
      console.log('05, Promise, контекст Макро-задачи-1');
      setTimeout(() => {
        console.log('06. setTimeout in Promise, log, контекст Макро-задачи-5');
        resolve('resolve a');
      }, 0);
    });
    console.log('08. log контекст Макро-задачи-1');
    a.then((resolve) => console.log(`09. then ${resolve}, микро-залача-01 к Макро-задаче-5`));

    setTimeout(() => console.log('10. setTimeout 4. контекст макро-задачи-6'), 0);


    function fun01() {
      console.log('11. log вложенная фукция fun01, контекст Макро-задачи-1');
      a.finally(() => console.log('12. finally, микро-задача-02 к Макро-задаче-5'));
      function fun02() {
        setTimeout(() => console.log('13. вложенная функция fun02, контекст Макро-задачи-7'), 0);
        console.log('14. log вложенная функция fun02, контекст Макро-задачи-1');
        a.then((resolve) => console.log(`15. a.then, ${resolve} микро-задача-03 к Макро-задаче-5`));
      }
      fun02();
    }

    fun01();

    a.finally(() => console.log('16. finally,  микро-задача-04 к Макро-задаче-5'));

    const b = new Promise((resolve, reject) => {
      console.log('17, Promise, контекст Макро-задачи-1');
      resolve('resolve b');
    });

    b.then((resolve) => console.log(`17. b.then, микро-задача 01 к Макро-задаче-1`));
    console.log('18. log -- самый нижний, контекста Макро-задачи-1');
  }

  selectedCodeStrinOnClick() {
    this.selectStringNumber++;
    console.log(this.selectStringNumber);
    if (this.selectStringNumber === 0) {
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber !== 0 && this.selectStringNumber < this.allStringCount) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.stringSelectIterationArr[this.selectStringNumber] = true;
    } else if (this.selectStringNumber === this.allStringCount) {
      this.stringSelectIterationArr[this.selectStringNumber - 1] = false;
      this.selectStringNumber = -1;
    }
  }
}
