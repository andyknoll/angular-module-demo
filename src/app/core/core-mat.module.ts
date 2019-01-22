// this is the CoreMatModule
// I am trying to import Material Buttons 
// and then use them in another module which imports this one


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule     // I thought these were needed for ripples!?
  ],
  exports: [
    MatButtonModule,
    BrowserAnimationsModule
  ]
})
export class CoreMatModule { }
