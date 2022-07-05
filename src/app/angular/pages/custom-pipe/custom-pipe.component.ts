import { Component, OnInit, Input } from '@angular/core';
import { showPipeFile, showPipeFileHTML } from 'src/app/core/data/showPipeFile';
import { Itheme } from 'src/app/core/modal/themes.modal';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})

export class CustomPipeComponent implements OnInit {

  public sampleThemeLists: Itheme[] = [
    {
      name: 'Angular',
      isSubThemeShow: false,
      subTheme: [
        {
          name: 'Pipes',
          description: [
            {
              name: 'Built-In Pipes',
              progress: false,
              date: null,
              url: '',
            },
            {
              name: 'Custom pipe',
              progress: true,
              date: new Date('06/21/2022 14:54:00'),
              url: 'custom-pipe',
            }
          ],
          progress: true,
        },
        {
          name: 'anchor',
          description: [
            {
              name: 'anchor',
              progress: true,
              date: new Date('06/19/2022 15:15:00'),
              url: 'angular-anchor',
            }
          ],
          progress: true,
        }
      ]
    }];

  public showPipeFile: string = showPipeFile;

  public showPipeFileHTML: string = showPipeFileHTML;

  @Input() public siteName = 'Custom pipe';

  constructor() { }

  ngOnInit(): void {
  }

}
