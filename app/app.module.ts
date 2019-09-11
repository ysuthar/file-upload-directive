import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUplaodDirectiveDirective } from './file-upload-directive'
import { FileUplaodInputDirective } from './file-upload-directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FileUplaodDirectiveDirective, FileUplaodInputDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }