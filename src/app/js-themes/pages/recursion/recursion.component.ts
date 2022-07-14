import { Component, Input, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/madel/links-list.modet';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.scss']
})

export class RecursionComponent implements OnInit {
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

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
