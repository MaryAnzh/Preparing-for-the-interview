import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.model';

@Component({
  selector: 'app-angular-translate',
  templateUrl: './angular-translate.component.html',
  styleUrls: ['./angular-translate.component.scss']
})

export class AngularTranslateComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'Localizing ionic applications with ngx-translate',
      url: 'https://phrase.com/blog/posts/localizing-ionic-applications-with-ngx-translate/',
    }
  ];
  public code: string[] = [
    `import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTPClientInterceptor } from './core/interceptor/httpclient.interceptor';
import { HttpClient } from '@angular/common/http';`,
    `export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}`,
    `@NgModule({
...
imports: [
  ...
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
  }),
],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPClientInterceptor,
    multi: true,
  },
],`,
    `core.module.ts

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  ...
  imports: [
    CommonModule,
    TranslateModule
  ],
`,
    `header.component.ts
___
import { TranslateService } from '@ngx-translate/core';
...
constructor(
  private _translate: TranslateService,
) {
  _translate.addLangs(['en', 'ru']);
  _translate.setDefaultLang('en');
 }
 ...
 changeLanguageOnClick(lang: string): void {
  ...
  this._translate.use(lang);
}
`,
`{{'NAME.NAME' | translate}}`
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
