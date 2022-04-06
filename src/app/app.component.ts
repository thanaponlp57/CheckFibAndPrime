import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('number', { static: true }) numberElm: ElementRef;
  @ViewChild('choice', { static: true }) choiceElm: ElementRef;
  constructor(numberElm: ElementRef, choiceElm: ElementRef) {
    this.numberElm = numberElm;
    this.choiceElm = choiceElm;
  }


  ngOnInit(): void {

  }

  updateNumber() {

    const isNotInteger = this.numberElm.nativeElement.value.includes(".");
    const isNegativeNumber = this.numberElm.nativeElement.value < 0;

    if (isNegativeNumber) {
      this.numberElm.nativeElement.value = 1;
      this.displayResult();
      return;
    }

    if (isNotInteger) {
      this.numberElm.nativeElement.value = Math.round(this.numberElm.nativeElement.value);
      this.displayResult();
    }

  }



  displayResult():string {
    let result = 'False';

    const isPrime = this.choiceElm.nativeElement.value == 'isPrime' && this.isPrime(this.numberElm.nativeElement.value);

    const IsFibanacci =  this.choiceElm.nativeElement.value == 'IsFibanacci' && this.isFibonacci(this.numberElm.nativeElement.value);

    if (isPrime || IsFibanacci) {
      result = 'True';
    }

    return result;
  }

  isPerfectSquare(x: number): boolean
  {
      let s = parseInt(Math.sqrt(x)+"");
      return (s * s == x);
  }

  isFibonacci(n: number): boolean
  {
        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
        // is a perfect square
        return this.isPerfectSquare(5 * n * n + 4) ||
        this.isPerfectSquare(5 * n * n - 4);
  }

  isPrime(n: number): boolean {
    return n % 2 == 0;
  }  
   
}
