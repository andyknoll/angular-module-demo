import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';   // now using FormControls
import { AppComponent } from './app.component';


// my two custom modules
import { CoreMatModule }   from './core/core-mat.module';
// import { MathLib } from './shared/math-lib.module';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,    // now using FormControls
    CoreMatModule,          // includes Material Design buttons
    // MathLib              // why do the methods work without this import???
  ],
  exports: [
    CoreMatModule,
    // MathLib
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
