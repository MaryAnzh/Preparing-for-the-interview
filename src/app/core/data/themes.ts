import { NEVER } from "rxjs";
import { Itheme } from "../modal/themes.modal";

export const themeLists: Itheme[] = [
  // JS
  {
    name: "JS",
    isSubThemeShow: false,
    subTheme: [
      //use strict
      {
        name: 'use strict',
        description: [
          {
            name: 'use strict',
            date: null,
            progress: false,
            url: '',
          },
        ],
        progress: false,
      },

      //Advanced Expressions
      {
        name: 'Advanced Expressions',
        description: [
          {
            name: 'Hoisting',
            date: null,
            progress: false,
            url: '',
          },
          {
            name: 'Temporal dead zone',
            date: null,
            progress: false,
            url: '',
          }
        ],
        progress: false,
      },

      //Variables
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

      //Types
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

      //Set. Map
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

      //Objects
      {
        name: 'Objects',
        description: [
          //create, modify
          {
            name: 'create, modify',
            progress: false,
            date: null,
            url: '',
          },
          //built-in methods
          {
            name: 'built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          //Object public, private, static members
          {
            name: 'Object public, private, static members',
            progress: false,
            date: null,
            url: '',
          },
          //Object keys/values
          {
            name: 'Object keys/values',
            progress: false,
            date: null,
            url: '',
          },
          //calculated props
          {
            name: 'calculated props',
            progress: false,
            date: null,
            url: '',
          },
          //Property flags & descriptors
          {
            name: 'Property flags & descriptors',
            progress: false,
            date: null,
            url: '',
          },
          //getter & setter
          {
            name: 'getter & setter',
            progress: false,
            date: null,
            url: '',
          },
          //iterable objects
          {
            name: 'iterable objects',
            progress: false,
            date: null,
            url: '',
          },
          //Object as Hash
          {
            name: 'Object as Hash (to loop through Object keys)',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },

      // Array
      {
        name: 'Array',
        description: [
          //create, modify, indexes, length
          {
            name: 'create, modify, indexes, length',
            progress: false,
            date: null,
            url: '',
          },
          //built-in methods
          {
            name: 'built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          //copy array part
          {
            name: 'copy array, array part',
            progress: false,
            date: null,
            url: '',
          },
          //Sorting
          {
            name: 'Sorting',
            progress: false,
            date: null,
            url: '',
          },
          //filtering
          {
            name: 'filtering',
            progress: false,
            date: null,
            url: '',
          },
          //search
          {
            name: 'search',
            progress: false,
            date: null,
            url: '',
          },
          //iterating
          {
            name: 'iterating',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },

      //Functions
      {
        name: 'Functions',
        description: [
          //create
          {
            name: 'create',
            progress: false,
            date: null,
            url: '',
          },
          //invoke
          {
            name: 'invoke',
            progress: false,
            date: null,
            url: '',
          },
          //arrow functions
          {
            name: 'arrow functions',
            progress: false,
            date: null,
            url: '',
          },
          //rest & spread operator
          {
            name: 'rest & spread operator',
            progress: false,
            date: null,
            url: '',
          },
          //default parameters
          {
            name: 'default parameters',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },

      //Functional Scope
      {
        name: 'Functional Scope',
        description: [
          //global scope and functional scope
          {
            name: 'global scope and functional scope',
            progress: false,
            date: null,
            url: '',
          },
          //variables visibility areas
          {
            name: 'variables visibility areas',
            progress: false,
            date: null,
            url: '',
          },
          //closure, recursion
          {
            name: 'closure, recursion',
            progress: false,
            date: null,
            url: '',
          },
          //nested scopes
          {
            name: 'nested scopes',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },

      //This, Prototype
      {
        name: 'This, Prototype',
        description: [
          //execution context
          {
            name: 'execution context',
            progress: false,
            date: null,
            url: '',
          },
          //call/apply/bind methods
          {
            name: 'call/apply/bind methods',
            progress: false,
            date: null,
            url: '',
          },
          //constructor functions
          {
            name: 'constructor functions',
            progress: false,
            date: null,
            url: '',
          },
          //understanding of prototypes
          {
            name: 'understanding of prototypes',
            progress: false,
            date: null,
            url: '',
          },
          //__proto__ property
          {
            name: '__proto__ property',
            progress: false,
            date: null,
            url: '',
          },
          //[Object.create] and define __proto__ explicitly
          {
            name: `[Object.create] and define __proto__ explicitly`,
            progress: false,
            date: null,
            url: '',
          },
          // set / get object prototype
          {
            name: `set / get object prototype`,
            progress: false,
            date: null,
            url: '',
          },
          //prototype property
          {
            name: `prototype property`,
            progress: false,
            date: null,
            url: '',
          },
          //dependency between function constructor prototype and instance __proto__
          {
            name: `dependency between function constructor prototype and instance __proto__`,
            progress: false,
            date: null,
            url: '',
          },
          //create 'class' methods using function prototype property
          {
            name: `create 'class' methods using function prototype property`,
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },

      //Classes
      {
        name: 'Classes',
        description: [
          //constructors
          {
            name: 'constructors',
            progress: false,
            date: null,
            url: '',
          },
          //difference between class and constructor function
          {
            name: 'difference between class and constructor function',
            progress: false,
            date: null,
            url: '',
          },
          //Getter/setter
          {
            name: 'Getter/setter',
            progress: false,
            date: null,
            url: '',
          },
          //super(), where we have to use it
          {
            name: 'super(), where we have to use it',
            progress: false,
            date: null,
            url: '',
          },
          //static members
          {
            name: 'static members',
            progress: false,
            date: null,
            url: '',
          },

        ],
        progress: false,
      },

      //Async JavaScript
      {
        name: 'Async JavaScript',
        description: [
          //Timers
          {
            name: 'Timers',
            progress: true,
            date: null,
            url: 'timers',
          },
          //Promise
          {
            name: 'Promise',
            progress: false,
            date: null,
            url: '',
          },
          //Promise states
          {
            name: '\Promise states',
            progress: false,
            date: null,
            url: '',
          },
          //Promise Chaining
          {
            name: 'Promise Chaining',
            progress: false,
            date: null,
            url: '',
          },
          //built-in methods
          {
            name: 'built-in methods',
            progress: false,
            date: null,
            url: '',
          },
          //Promise static methods
          {
            name: 'Promise static methods',
            progress: false,
            date: null,
            url: '',
          },
          //compare promise and callback patterns
          {
            name: 'compare promise and callback patterns',
            progress: false,
            date: null,
            url: '',
          },
          //handle errors in promises
          {
            name: 'handle errors in promises',
            progress: false,
            date: null,
            url: '',
          },
          //event loop
          {
            name: 'event loop, + interactive example',
            progress: true,
            date: new Date('06/30/2022'),
            url: 'event-loop',
          },
          //sync/await
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

  //JavaScript in Browser
  {
    name: 'JavaScript in Browser',
    isSubThemeShow: false,
    subTheme: [
      //Global object window
      {
        name: 'Global object window',
        description: [
          //Location
          {
            name: 'Location',
            progress: false,
            date: null,
            url: '',
          },
          //History API (Global object window)
          {
            name: 'History API (Global object window)',
            progress: false,
            date: null,
            url: '',
          },
          //history state
          {
            name: 'history state',
            progress: false,
            date: null,
            url: '',
          },
          //navigator
          {
            name: 'navigator',
            progress: false,
            date: null,
            url: '',
          },
          //screen
          {
            name: 'screen',
            progress: false,
            date: null,
            url: '',
          },
          //document
          {
            name: 'document',
            progress: false,
            date: null,
            url: '',
          },
          //cookies
          {
            name: 'cookies',
            progress: false,
            date: null,
            url: '',
          },
          //Difference between localStorage, sessionStorage, session and cookies
          {
            name: '\Difference between localStorage, sessionStorage, session and cookies',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //DOM Manipulation
      {
        name: 'DOM Manipulation',
        description: [
          {
            name: 'selection, traversing, modification, live collections',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //Nodes Modification
      {
        name: 'Nodes Modification',
        description: [
          {
            name: 'node properties, attributes, data attributes, styling',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //Events Basics
      {
        name: 'Events Basics',
        description: [
          //difference between capturing and bubbling
          {
            name: 'difference between capturing and bubbling',
            progress: false,
            date: null,
            url: '',
          },
          //Event concept
          {
            name: 'Event concept',
            progress: false,
            date: null,
            url: '',
          },
          //Custom events
          {
            name: 'Custom events',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //Events Propagation / Preventing
      {
        name: 'Events Propagation / Preventing',
        description: [
          //Event propagation cycle
          {
            name: 'Event propagation cycle',
            progress: false,
            date: null,
            url: '',
          },
          //stop Event propagation
          {
            name: 'stop Event propagation',
            progress: false,
            date: null,
            url: '',
          },
          //Event delegating concept
          {
            name: 'Event delegating concept',
            progress: false,
            date: null,
            url: '',
          },

        ],
        progress: false,
      },
      //Event Handling
      {
        name: 'Event Handling',
        description: [
          {
            name: 'node properties, attributes, data attributes, styling',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
      //Browser API
      {
        name: 'Browser API',
        description: [
          //Fetch
          {
            name: 'Fetch',
            progress: false,
            date: null,
            url: '',
          },
          //Console
          {
            name: 'Console',
            progress: false,
            date: null,
            url: '',
          },
          //Storage
          {
            name: 'Storage',
            progress: false,
            date: null,
            url: '',
          },
          //History
          {
            name: 'History',
            progress: false,
            date: null,
            url: '',
          },
          //Web Animations API
          {
            name: 'Web Animations API',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
    ]
  },

  //TypeScript
  {
    name: 'TypeScript',
    isSubThemeShow: false,
    subTheme: [
      //TypeScript
      {
        name: 'TypeScript',
        description: [
          //TS(ES6) module system
          {
            name: 'TS(ES6) module system',
            progress: false,
            date: null,
            url: '',
          },
          //interfaces, custom types, types/interface differences
          {
            name: 'interfaces, custom types, types/interface differences',
            progress: false,
            date: null,
            url: '',
          },
          //function types.
          {
            name: 'function type',
            progress: false,
            date: null,
            url: '',
          },
          //utitily types, typeguards, generic types
          {
            name: 'futitily types, typeguards, generic types',
            progress: false,
            date: null,
            url: '',
          },

        ],
        progress: false,
      },
    ]
  },

  //HTML
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

  //CSS.SCSS
  {
    name: 'CSS/SCSS',
    isSubThemeShow: false,
    subTheme: [
      //CSS Methodologies
      {
        name: 'CSS Methodologies',
        description: [
        //BEM, OOCSS, SMACSS, ITCSS, Atomic CSS
          {
            name: 'BEM, OOCSS, SMACSS, ITCSS, Atomic CSS',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //CSS Preprocessors
      {
        name: 'CSS Preprocessors',
        description: [
          //LESS, SASS/SCSS, Stylus
          {
            name: 'LESS, SASS/SCSS, Stylus',
            progress: false,
            date: null,
            url: '',
          }
        ],
        progress: false,
      },
      //problems
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

  //Design patterns
  {
    name: 'Design patterns',
    isSubThemeShow: false,
    subTheme: [
    //design patterns
      {
        name: 'design patterns',
        description: [
        //design patterns
          {
            name: 'design patterns',
            progress: false,
            date: null,
            url: '',
          },
          //KISS, DRY, YAGNI
          {
            name: 'KISS, DRY, YAGNI',
            progress: false,
            date: null,
            url: '',
          },
          //behind SOLID principles
          {
            name: 'behind SOLID principles',
            progress: false,
            date: null,
            url: '',
          },
        ],
        progress: false,
      },
    ]
  },

  //Angular
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
            url: 'angular/custom-pipe',
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
            url: 'angular/anchor',
          }
        ],
        progress: true,
      }
    ]
  },

  //Animation
  {
    name: 'Animation',
    isSubThemeShow: false,
    subTheme: [
      //Browser Animation
      {
        name: 'Browser Animation',
        description: [
          //requestAnimationFrame
          {
            name: 'requestAnimationFrame',
            progress: false,
            date: null,
            url: '',
          },
          //Web Animations API
          {
            name: 'Web Animations API',
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
