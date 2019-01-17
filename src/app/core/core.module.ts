// this is the CoreModule
// I am trying to import Material Buttons 
// and then use them in another module which imports this one


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //BrowserAnimationsModule,  // I thought these were needed for ripples!
    MatButtonModule
  ],
  exports: [
    //BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class CoreModule { }
