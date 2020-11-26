import { Injectable } from '@angular/core';

const VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

@Injectable()
export class BoolsAndCowsService {
  secret: string;
  secretSize = 4;
  guessMsg: Array<string>;
  errorMsg: string;
  isVin: boolean;
  hint = true;
  constructor() {
    this.reset();
  }

  /**
   * Генерирует случайное секретное число
   */
  generateSecret(): void {
    this.secret = '';
    let i: number;
    for (i = 0; i < this.secretSize; i++) {
      const stepValues = VALUES.filter((item) => !this.secret.includes(item));
      this.secret += stepValues[Math.floor(Math.random() * stepValues.length)];
    }
    if (this.hint) {
      console.log('Заданано число: ', this.secret);
    }
  }

  isError(): boolean {
    if (this.errorMsg === '') {
      return false;
    }
    return true;
  }

  guess(val: string): void {
    const isCorrect = this.checkValue(val);
    if (!isCorrect) {
      return;
    }
    const bools = this.getBools(val);
    const cows = this.getCows(val);
    if (bools === this.secretSize) {
      this.isVin = true;
    }
    const msg = val + ': ' + bools + ' 🐂, ' + cows + ' 🐄' + (this.isVin ? '. Победа!' : '');
    this.guessMsg.push(msg);
  }

  reset(): void {
    this.generateSecret();
    this.errorMsg = '';
    this.guessMsg = [];
    this.isVin = false;
  }

  private getBools(val: string): number {
    let i: number;
    let bools = 0;
    for (i = 0; i < this.secretSize; i++) {
      if (val[i] === this.secret[i]) {
        bools++;
      }
    }
    return bools;
  }

  private getCows(val: string): number {
    let i: number;
    let cows = 0;
    const valArray: Array<string> = this.secret.split('');
    for (i = 0; i < this.secretSize; i++) {
      if (val[i] !== this.secret[i] && valArray.includes(val[i])) {
        cows++;
      }
    }
    return cows;
  }

  private checkValue(val: string): boolean {
    this.errorMsg = '';
    const length = this.secret.length;
    const valArray: Array<string> = this.secret.split('');
    if (this.isVin) {
      this.errorMsg = 'Победа! Начните игру заново.';
      return false;
    }
    if (val.length !== length) {
      this.errorMsg = 'Ход - число, количество знаков = ' + this.secretSize;
      return false;
    }
    valArray.forEach((element) => {
      if (!VALUES.includes(element)) {
        this.errorMsg = 'Ход - число, количество знаков = ' + this.secretSize;
      }
    });
    if (this.errorMsg !== '') {
      return false;
    }
    if (new Set(val).size !== length) {
      this.errorMsg = 'Цифры не должны повторяться';
      return false;
    }
    return true;
  }
}
