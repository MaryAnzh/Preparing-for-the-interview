import { Itheme } from "../modal/themes.modal";

export const themeLists: Itheme[] = [
  {
    name: "JS",
    isSubThemeShow: false,
    subTheme: [
      {
        name: `Variables, Values, Types. Declaration`,
        description: [
          `(number, string, boolean, object, null, undefined, array, symbol, Set, Map, BigInt)`,
          `(var, let, const, hoisting, temporary dead zone)`
        ],
        progress: false,
        url: '',
      },
      {
        name: `Expressions (basic of auto type conversions, comparison), Operators, Statements `,
        description: [
          `(literals, conditions, loops)`,

        ],
        progress: false,
        url: '',
      },
      {
        name: `Objects`,
        description: [
          `create, modify, built-in methods`,
          `Object static methods`,
          'calculated props,',
          'getter/setter'

        ],
        progress: false,
        url: '',
      },
      {
        name: `Array`,
        description: [
          `create, modify, indexes, length, built-in methods`,
          'sorting, filtering, search, iterating',
          `Array static methods`,


        ],
        progress: false,
        url: '',
      },
      {
        name: `Functions`,
        description: [
          `create`,
          'invoke',
          'arrow functions',
          'rest/spread operator',
          'default parameters',
          'scope, closure, recursion '
        ],
        progress: false,
        url: '',
      },
    ]
  }
];


