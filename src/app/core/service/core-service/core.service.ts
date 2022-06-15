import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoreService {
  private _isMainPage$$ = new Subject<boolean>();

  public isMainPage$ = this._isMainPage$$.asObservable();

  constructor(
  ) {
  }

  updateIsMain(value: boolean): void {
    this._isMainPage$$.next(value);
  }
}
