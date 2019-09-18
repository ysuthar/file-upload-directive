import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadDirective } from './file-upload-directive'
import { FileUploadInputDirective } from './file-upload-directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FileUploadDirective, FileUploadInputDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }