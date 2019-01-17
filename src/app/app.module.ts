import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';

// WHY AREN'T THESE NEEDED ???
import { CoreModule }   from './core/core.module';
// import { MathLib } from './shared/math-lib.module';

// already imported in CoreModule
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule} from '@angular/material/button';

/***************************************************************************
  CoreModule MUST BE IMPORTED HERE OR ELSE MATERIAL BUTTONS DO NOT SHOW!
***************************************************************************/

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,    // includes Material Design buttons
    // MathLib        // why do the methods work without this import???
  ],
  exports: [
    CoreModule,
    // MathLib
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
