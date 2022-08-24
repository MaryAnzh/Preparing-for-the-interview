import { Component, OnInit } from '@angular/core';
import { INav } from '../../model/nav.model';

@Component({
  selector: 'app-angular-project',
  templateUrl: './angular-project.component.html',
  styleUrls: ['./angular-project.component.scss']
})

export class AngularProjectComponent implements OnInit {

  public nav: INav[] = [
    {
      title: `angular-cv`,
      isActive: true,
    },
    {
      title: `project-management-app-individual`,
      isActive: false,
    },
  ];

  public code: string[] = [
` "scripts": {
    "ng": "ng",
    "start": "ng serve -o"`,
  `"options": {
    "outputPath": "dist"`,
`"architect": {
  ...
  "deploy": {
    "builder": "angular-cli-ghpages:deploy"
  }`,
  `ng deploy --base-href="https://<name>.github.io/<project name>/"`
  ];

  constructor() { }

  showProjectOnClick(name: string): void {
    if (name === 'angular-cv') {
      this.nav[0].isActive = true;
      this.nav[1].isActive = false;
    } else {
      this.nav[0].isActive = false;
      this.nav[1].isActive = true;
    }
  }

  ngOnInit(): void {
  }

}
