import { Component, Input, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.scss']
})

export class RecursionComponent {
  @Input() public linksData: ILinksData[] = [
    {
      title: 'Recursion',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Recursion',
    },
  ];

  public codes: string[] = [
    `const getMaxCallStackSize2 = (i) => {
  try {
    return getMaxCallStackSize2(++i);
  } catch {
    return console.log(i);
  }
};
getMaxCallStackSize2(0);`,
    `const factorial = (n) => {
  if (n === 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

console.log(factorial(3));`,
'3 -> (2 -> (1 -> (1)))',
`1 * 1 * 2 * 3`,
`//1
const arrayDepth = (arr, currentLevel = 1, maxDepth = 0) => {
//2
  maxDepth = Math.max(maxDepth, currentLevel);
//3
  for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (Array.isArray(element)) {
          maxDepth = arrayDepth(element, currentLevel + 1, maxDepth);
        }
    }
//4
    return maxDepth;
}

const test = [1, 2, [[1, 2, []]],[[[1, 2, [[]]]]], 5];
console.log(arrayDepth(test));`
  ];

  constructor() { }
}
