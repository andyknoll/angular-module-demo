import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MathLib {

    add(a: number, b: number) {
      return a + b
    }

    mult(a: number, b: number) {
      return a * b
    }

 }
