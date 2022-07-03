import { IConsoleData, ITaskDate } from "./event-loop.model";

export const codeDescription: string[] = [
  //0
  'Создание Макро-задачи-1, при клике на кнопку "Show in Console"',
  //1
  'Вызов функции task01(), ассоциированной Макро-задаче-1, помещение контекста ее выполнения на верх стека вызова',
  //2
  'Создание Макро-задачи-2, отправка ее в очередь макро-задач',
  //3
  'Выполнение функции',
  //4
  'Создание Promise',
  //5
  'Создание Макро-задачи-3, отправка ее в очередь макро-задач',
  //6
  'Выполнение функции',
  //7
  'Создание Микро-задачи-01, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-3',
  //8
  'Создание Макро-задачи-4, отправка ее в очередь макро-задач',
  //9
  'Вызов fun01()',
  //10
  'Выполнение fun01()',
  //11
  'Выполнение функции',
  //12
  'Вызов fun02()',
  //13
  'Выполнение fun02()',
  //14
  'Создание Макро-задачи-5, отправка ее в очередь макро-задач',
  //15
  'Выполнение функции',
  //16
  'Создание Микро-задачи-02, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-3',
  //17
  'Создание Promise',
  //18
  'Выполнение функции',
  //19
  'Создание Микро-задачи-03, отправка ее в очередь микро-задач. Ожидание выполнения Макро-задачи-1',
  //20
  'Выполнение функции',
  //21
  'Завершение выполнения Макро-задачи-1',

]

export const consoleData: IConsoleData[] = [
  {
    text: 'Макро-задача-1',
    visible: false,
    isTitle: true,
  },
  {
    text: '02. log',
    visible: false,
    isTitle: false,
  },
  {
    text: '04. log',
    visible: false,
    isTitle: false,
  },
  {
    text: '07. log вложенная фукция fun01',
    visible: false,
    isTitle: false,
  },
  {
    text: '09. log, вложенная функция fun02',
    visible: false,
    isTitle: false,
  },
  {
    text: '11. log из Promise',
    visible: false,
    isTitle: false,
  },
  {
    text: '13. последний log',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Микро-задача-03',
    visible: false,
    isTitle: true,
  },
  {
    text: '12. b.then, результат выполнения промиса уже есть в Макро-задаче-1',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Макро-задача-2, setTimeout-1',
    visible: false,
    isTitle: true,
  },
  {
    text: '01. log',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Макро-задача-3, setTimeout-2 in Promise',
    visible: false,
    isTitle: true,
  },
  {
    text: '03. log',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Микро-задача-01, оработала, после выполнения Макро-задачи-3',
    visible: false,
    isTitle: true,
  },
  {
    text: '05. a.then',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Микро-задача-02, оработала, после выполнения Макро-задачи-3',
    visible: false,
    isTitle: true,
  },
  {
    text: '10. a.then',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Макро-задача-4, setTimeout-3',
    visible: false,
    isTitle: true,
  },
  {
    text: '06. log',
    visible: false,
    isTitle: false,
  },
  {
    text: 'Макро-задача-5, setTimeout-4, вложенная функция fun02',
    visible: false,
    isTitle: true,
  },
  {
    text: '08. log',
    visible: false,
    isTitle: false,
  }
];

export const macrotaskDate: ITaskDate[] = [
  {
    title: 'Макро-задача-01',
    visible: false,
    select: false,
  },
  {
    title: 'Макро-задача-02',
    visible: false,
    select: false,
  },
  {
    title: 'Макро-задача-03',
    visible: false,
    select: false,
  },
  {
    title: 'Макро-задача-04',
    visible: false,
    select: false,
  },
  {
    title: 'Макро-задача-05',
    visible: false,
    select: false,
  },
]

export const microtaskDate: ITaskDate[] = [
  {
    title: 'Микро-задача-01',
    visible: false,
    select: false,
  },
  {
    title: 'Микро-задача-02',
    visible: false,
    select: false,
  },
  {
    title: 'Микро-задача-03',
    visible: false,
    select: false,
  },
]