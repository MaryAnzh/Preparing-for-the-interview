import { NEVER } from "rxjs";
import { Itheme } from "../modal/themes.modal";

export const themeLists: Itheme[] = [
// JS
  {
    name: "JS",
    isSubThemeShow: false,
    subTheme: [
    //00-00 Variables
      {
        name: 'Variables',
        description: [
          {
            name: 'var, let, const',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //00-01 Types
      {
        name: 'Types',
        description: [
          {
            name: 'number, string, boolean, object, null, undefined, array, symbol, BigInt',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //00-02 Set. Map
      {
        name: 'Set. Map',
        description: [
          {
            name: 'Set, Map',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //00-03 Objects
      {
        name: 'Objects',
        description: [
          {
            name: 'create, modify, built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'Object static methods',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'calculated props',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'getter & setter',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //00-04 Array
      {
        name: 'Array',
        description: [
          {
            name: 'create, modify, indexes, length, built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'Sorting',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'filtering',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'search',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'iterating',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //00-05 Functions
      {
        name: 'Functions',
        description: [
          {
            name: 'create',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'invoke',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'arrow functions',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'rest & spread operator',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'default parameters',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'scope, closure, recursion',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //00-06 This, Prototype
      {
        name: 'This, Prototype',
        description: [
          {
            name: 'execution context',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'call/apply/bind methods',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'constructor functions',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'understanding of prototypes',
            progress: false,
            date: null,
            url: '',
          },

        ],
        progress: false,
      },
      //00-07 Classes
      {
        name: 'Classes',
        description: [
          {
            name: 'constructors',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'static members',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //00-08 Async JavaScript
      {
        name: 'Async JavaScript',
        description: [
          {
            name: 'Timers',
            progress: true,
            date: null,
            url: 'timers',
          },
          {
            name: 'Promise',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'async/await',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //00-09 JS Errors
      {
        name: 'JS Errors',
        description: [
          {
            name: 'try..catch',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'throw',
            progress: false,
            date: null,
            url: '',
          },
          {
            name: 'Error class',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
    ]
  },

  //TypeScript 01
  {
    name: 'TypeScript',
    isSubThemeShow: false,
    subTheme: [
      {
        name: '',
        description: [
          {
            name: '',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
    ]
  },

  //HTML 02
  {
    name: 'HTML',
    isSubThemeShow: false,
    subTheme: [
      {
        name: '',
        description: [
          {
            name: '',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
    ]
  },

  //CSS.SCSS 03
  {
    name: 'CSS/SCSS',
    isSubThemeShow: false,
    subTheme: [
    //03-00
      {
        name: 'problems',
        description: [
          {
            name: 'Прыгающий контент от скролл-бар',
            progress: true,
            date: new Date('06/15/2022 14:00'),
            url: 'css-scroll',
          }
        ],
        progress: true,
      },
    ]
  },

  //Angular 04
  {
    name: 'Angular',
    isSubThemeShow: false,
    subTheme: [
      //pipes
      {
        name: 'Pipes',
        description: [
          {
            name: 'Built-In Pipes',
            progress: true,
            date: new Date('Jun 18 2022 19:52:00'),
            url: 'angular-pipes',
          },
          {
            name: 'Custom pipe',
            progress: true,
            date: new Date('06/21/2022 14:54'),
            url: 'custom-pipe',
          }
        ],
        progress: true,
      },
      //anchor
      {
        name: 'anchor',
        description: [
          {
            name: 'anchor',
            progress: true,
            date: new Date('Jun 19 2022 15:15:00'),
            url: 'angular-anchor',
          }
        ],
        progress: true,
      }
    ]
  },

  //Animation 05
  {
    name: 'Animation',
    isSubThemeShow: false,
    subTheme: [
      {
        name: '',
        description: [
          {
            name: '',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
    ]
  },

  //Games 06
  {
    name: 'Games',
    isSubThemeShow: false,
    subTheme: [
      {
        name: '',
        description: [
          {
            name: '',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
    ]
  },

];
