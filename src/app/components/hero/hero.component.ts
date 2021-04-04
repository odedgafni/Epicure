import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  results$: Observable<any>;
  private searchValue = new Subject<string>();

  constructor(private cardService: CardService) { }

  handleInput(input: string) {
    this.searchValue.next(input)
  }

  ngOnInit(): void {
    this.results$ = this.searchValue.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value: string) => this.cardService.search(value)),
    );
  }

}
