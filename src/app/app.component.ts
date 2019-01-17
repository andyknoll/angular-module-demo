import { Component } from '@angular/core';

// NEED TO IMPORT THIS SO MathLib() IS RECOGNIZED BELOW
import { MathLib } from './shared/math-lib.module';

// import { CoreModule } from './core/core.module';    // includes Material Design buttons



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Module Demo';
  mathLib = null;
  a = 0;
  b = 0;

  constructor() {
  }

  ngOnInit() {
    this.mathLib = new MathLib();   // this is why MathLib must be visible here!
    this.a = 0;
    this.b = 0;
  }

  showAnswerAdd() {
    let el = document.getElementById("answer-add");
    // cannot use .value on the <input> elements! 
    this.a = parseInt(document.getElementById("inpAddA").getAttribute("value"));
    this.b = parseInt(document.getElementById("inpAddB").getAttribute("value"));
    el.innerHTML = this.mathLib.add(this.a, this.b).toString();   // API call
  }

  showAnswerMult() {
    let el = document.getElementById("answer-mult");
    // cannot use .value on the <input> elements! 
    this.a = parseInt(document.getElementById("inpMultA").getAttribute("value"));
    this.b = parseInt(document.getElementById("inpMultB").getAttribute("value"));
    el.innerHTML = this.mathLib.mult(this.a, this.b).toString();   // API call
  }

}
