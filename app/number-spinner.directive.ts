import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Directive({
  selector: '[NumberSpinnerDirective]'
})
export class NumberSpinnerDirective {
  numberValue:number;
  NumberElement;

  constructor(private elRef: ElementRef) {}

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

    this.NumberElement = this.elRef.nativeElement.getElementsByClassName('numberValue').item(0);
    this.numberValue = this.NumberElement.value;


    if(event.target.classList.contains('plus')){
      if(this.numberValue >= 0){
         this.NumberElement.value = +this.NumberElement.value + 1;
      }
      else{
      }
    }
    if(event.target.classList.contains('minus')){
      if(this.numberValue > 0){
        this.NumberElement.value = +this.NumberElement.value - 1;
      }
      else{}
    }
  }
}
