import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberSpinnerDirective } from './number-spinner.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NumberSpinnerDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
