import { IMethods } from "src/app/share/madel/description.model";

const promiseCodeExample: string[] = [
  //00
  `  const p1 = Promise.resolve('Promise 01');
  const p2 = 'Promise 02';
  const p3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'Promise 03');
  });
  Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
  });
  //(3) ['Promise 01', 'Promise 02', 'Promise 03']`,

  //01
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

  //02
  `const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('one'), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('two'), 1000);
});
const p3 = Promise.reject('p3 reject');
Promise.allSettled([p1, p2, p3])
  .then(
      resolve => console.log(resolve),
      reject => console.log(\`reject = \${ reject }\`),
  );
  //In console
  // (3) [{…}, {…}, {…}]
  // 0: {status: 'fulfilled', value: 'one'}
  // 1: {status: 'fulfilled', value: 'two'}
  // 2: {status: 'rejected', reason: 'p3 reject'}`,

  //03
  `const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "two");
});
const p3 = Promise.reject('p3 reject');
Promise.any([p1, p2, p3])
.then(
    value => console.log(value),
    reject => console.log(reject)
    );
//console
//own`,

  //04
  `const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "two");
});
const p3 = Promise.reject('p3 reject');
Promise.any([p1, p2, p3])
.then(
    value => console.log(value),
    reject => console.log(reject),
    );
//console
//AggregateError: All promises were rejected`,

  //05
  `const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1 success'), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('p2 reject'), 1000);
});
const p3 = Promise.resolve('p3 success');
Promise.race([p1, p2, p3])
.then(
  value => console.log(value),
  reject => console.log(reject),
  );
//console
//p3 success`,

  //06
  `const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1 success'), 500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('p2 reject'), 1000);
});
const p3 = Promise.reject('p3 reject');
Promise.race([p1, p2, p3])
.then(
  value => console.log(value),
  reject => console.log(reject),
  );
//console
//p3 reject`
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
  },
  //Promise.allSettled()
  {
    name: 'Promise.allSettled()',
    descriptions: [
      `Метод Promise.allSettled() возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.`,
    ],
    returnValue: `Promise, который будет выполнен после завершения каждого промиса, вне зависимости от того выполнился он успешно или был отклонён. В то же время, в возвращаемый обработчик промиса передаётся массив, который содержит результат каждого промиса в исходном наборе промисов.`,
    code: [
      {
        description: '',
        code: promiseCodeExample[2]
      }
    ],
  },
  //Promise.any
  {
    name: 'Promise.any',
    descriptions: [
      'Promise.any() принимает итерируемый объект Promise.',
      'Как только один из промисов (Promise) выполнится успешно (fullfill), метод возвратит единственный объект Promise со значением выполненного промиса',
      'При отклонении всех Promise, возвращается AggregateError',
    ],
    returnValue: 'Promise, с результатом первого выполненного промиса, или AggregateError, при отклонении всех Promise',
    code: [
      {
        description: 'Успешное завершение',
        code: promiseCodeExample[3]
      },
      {
        description: 'Отклонене всех промисов',
        code: promiseCodeExample[4]
      }
    ]
  },
  //Promise.race()
  {
    name: 'Promise.race()',
    descriptions: [
      `Метод Promise.race(iterable) возвращает выполненный или отклонённый промис, в зависимости от того, с каким результатом завершится первый из переданных промисов, со значением или причиной отклонения этого промиса.`,
    ],
    returnValue: 'Promise, с результатом первого выполненного промиса',
    code: [
      {
        description: 'Первым выполнен успешный Promise',
        code: promiseCodeExample[5],
      },
      {
        description: 'Первым выполнен отклоненный Promise',
        code: promiseCodeExample[6],
      }
    ]
  },
  //Promise.resolve()
  {
    name: 'Promise.resolve()',
    descriptions: [
      ''
    ],
    returnValue: '',
    code: [
      {
        description: '',
        code: '',
      }
    ]
  },
  //Promise.reject()
  {
    name: 'Promise.reject()',
    descriptions: [
      ''
    ],
    returnValue: '',
    code: [
      {
        description: '',
        code: '',
      }
    ]
  },
  //Promise.prototype.then()
  {
    name: 'Promise.prototype.then()',
    descriptions: [
      ''
    ],
    returnValue: '',
    code: [
      {
        description: '',
        code: '',
      }
    ]
  },
  //Promise.prototype.catch()
  {
    name: 'Promise.prototype.catch()',
    descriptions: [
      ''
    ],
    returnValue: '',
    code: [
      {
        description: '',
        code: '',
      }
    ]
  },
  //Promise.prototype.finally()
  {
    name: 'Promise.prototype.finally()',
    descriptions: [
      ''
    ],
    returnValue: '',
    code: [
      {
        description: '',
        code: '',
      }
    ]
  },
]
