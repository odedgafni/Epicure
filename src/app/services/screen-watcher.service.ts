import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenWatcherService implements OnDestroy {
  
  public screenWidth$: BehaviorSubject<number> = new BehaviorSubject(null);

  private unsubscriber$: Subject<any> = new Subject();

  constructor() {
    this.init();
  }

  init() {
    this.setScreenWidth(window.innerWidth);

    fromEvent(window, 'resize')
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscriber$)
      ).subscribe((e: any) => {
        this.setScreenWidth(e.target.innerWidth);
      });
  }

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }
}
