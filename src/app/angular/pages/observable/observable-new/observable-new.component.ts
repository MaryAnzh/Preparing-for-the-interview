import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-new',
  templateUrl: './observable-new.component.html',
  styleUrls: ['./observable-new.component.scss']
})
export class ObservableNewComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    console.clear();
    // const obs = new Observable((sub) => {
    //   sub.next(1);

    //   setTimeout(() => {
    //     sub.next(3);
    //     sub.complete();
    //   }, 2000);
    //   sub.next(2);
    // });
    // obs.subscribe({
    //   next: (vl) => console.log(vl),
    //   error: (err) => console.log('Error: ', err),
    //   complete: () => console.log('Completed')
    // })
  }

}
