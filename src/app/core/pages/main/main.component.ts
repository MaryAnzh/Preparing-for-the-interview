import { Component, Input } from '@angular/core';
import { themeLists } from '../../data/themes';
import { ITheme } from '../../modal/themes.modal';
import { Router } from '@angular/router';
import { CoreService } from '../../service/core-service/core.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  @Input() public themeLists: ITheme[] = themeLists;

  constructor(
    private router: Router,
    private coreService: CoreService,
  ) { }

  @Input() linkToList(url: string): void {
    if (url !== '') {
      this.router.navigateByUrl(url);
      this.coreService.updateIsMain(false);
    }
  }
}
