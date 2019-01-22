import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

// NEED TO IMPORT THIS SO MathLib() IS RECOGNIZED BELOW
import { MathLib } from './shared/math-lib.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Module Demo';

  mathLib = new MathLib();   // this is why MathLib must be visible here!
  a = 0;
  b = 0;
  c = 0;
  d = 0;

  // using single FormControls - not a FormGroup
  inputA = new FormControl('');
  inputB = new FormControl('');
  inputC = new FormControl('');
  inputD = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    this.inputA.setValue(1);
    this.inputB.setValue(2);
    this.inputC.setValue(3);
    this.inputD.setValue("4");    // string works too
  }


  // WRONG! DO NOT USE document.getElementById
  
  showAnswerAdd() {
    let el = document.getElementById("answer-add");
    this.a = this.inputA.value;
    this.b = this.inputB.value;
    // change this to use auto-updating
    el.innerHTML = this.mathLib.add(this.a, this.b).toString();   // API call
  }

  showAnswerMult() {
    let el = document.getElementById("answer-mult");
    this.c = this.inputC.value;
    this.d = this.inputD.value;
    // change this to use auto-updating
    el.innerHTML = this.mathLib.mult(this.c, this.d).toString();   // API call
  }

}
