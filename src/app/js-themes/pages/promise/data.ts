import { IMethods } from "src/app/share/madel/description.model";

const promiseCodeExample: string[] = [
  `  const p1 = Promise.resolve('Promise 01');
  const p2 = 'Promise 02';
  const p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'Promise 03');
  });
  Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
  });
  //(3) ['Promise 01', 'Promise 02', 'Promise 03']`,
  `  const p1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, "one");
  });
  const p2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, "two");
  });

  const p3 = Promise.reject('p3 reject');

  Promise.all([p1, p2, p3])
      .then(
          resolve => console.log(\`resolve = \${resolve}\`),
          reject => console.log(\`reject = \${reject}\`),
      );
  //reject = p3 reject`,

];

export const methods: IMethods[] = [
  {
    name: 'Promise.all()',
    descriptions: [
      'Метод Promise.all(iterable) возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонено любое из переданных промисов..',
      'Promise.all ждёт выполнения всех промисов (или первого метода reject())',
      `Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта, но не порядок выполнения промисов. Если какой-либо элемент перечисляемого объекта не является промисом, то он будет преобразован с помощью метода Promise.resolve.`,
    ],
    returnValue: 'Promise, который будет выполнен когда будут выполнены все промисы, переданные в виде перечисляемого аргумента, или отклонён, если будет отклонено хоть одно из переданных промисов',
    code: [
      {
        description: 'Все Promise завершены успешно',
        code: promiseCodeExample[0],
      },
      {
        description: 'Promise.all будет немедленно отклонён если один из переданных промисов будет отклонен',
        code: promiseCodeExample[1],
      },
    ]
  }
];
