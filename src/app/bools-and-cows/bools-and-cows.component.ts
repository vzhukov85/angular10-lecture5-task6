import { Component, Input, OnInit } from '@angular/core';
import { BoolsAndCowsService } from '../bools-and-cows.service';

@Component({
  selector: 'app-bools-and-cows',
  templateUrl: './bools-and-cows.component.html',
  styleUrls: ['./bools-and-cows.component.css'],
  providers: [BoolsAndCowsService],
})
export class BoolsAndCowsComponent implements OnInit {
  @Input() value;

  constructor(private boolsAndCowsSrv: BoolsAndCowsService) {}

  ngOnInit(): void {}

  guess(val: string): void {
    this.boolsAndCowsSrv.guess(val);
    this.value = '';
  }

  get errorMsg(): string {
    return this.boolsAndCowsSrv.errorMsg;
  }

  get guessMsg(): Array<string> {
    return this.boolsAndCowsSrv.guessMsg;
  }

  reset(): void {
    this.boolsAndCowsSrv.reset();
  }

  isError(): boolean {
    return this.boolsAndCowsSrv.isError();
  }
}
