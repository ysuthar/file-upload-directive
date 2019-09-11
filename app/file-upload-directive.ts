import { Directive, ElementRef, HostListener, HostBinding, Input, Component, ContentChildren, QueryList } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Directive({
  selector: '[FileUplaod]'
})
export class FileUplaodDirectiveDirective {
  url = '';
  file = ''
  img;
  reader;
  uploaded= false;
  a;
  result;

  constructor(private elRef: ElementRef) {}

  @HostListener('click', ['$event'])
  click(event) {
    if(event.target.classList.contains('remove')){
      this.elRef.nativeElement.getElementsByClassName('FileSuccess').item(0).style.display='none';
      this.elRef.nativeElement.getElementsByClassName('FileUplaod').item(0).style.display='block';
      this.elRef.nativeElement.getElementsByClassName('FileUplaod').item(0).value = '';
    }

    if(event.target.classList.contains('viewImage')){

    var html = '<html>' +
      '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
      '<body>' +
      '<iframe src="' + this.elRef.nativeElement.getElementsByTagName('img').item(0).src + '"></iframe>' +
      '</body></html>';
     //window.open("about:blank");
     this.a = window.open("about:blank", "Big Image");
     this.a.document.write(html);
     this.a.document.close();
    }
  }

}

@Directive({ selector: '[FileUplaodInput]'})

export class FileUplaodInputDirective {

  @ContentChildren(FileUplaodDirectiveDirective) uploaded;

  url = '';
  NumberElement;
  numberValue;
  img;
  reader; 
  strsubstring

  constructor(private elRef: ElementRef) {}

  @HostListener('change', ['$event'])
  change(event) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      var FileName = event.target.files[0].name;
      var Filesize = Math.trunc((event.target.files[0].size)/1024);

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
      var img = new Image;
      this.url = event.target.result;

      // **//



      this.strsubstring = FileName.substring(FileName.lastIndexOf("."), FileName.length);
                        if (this.strsubstring == '.jpg' || this.strsubstring == '.png' || this.strsubstring == '.jpeg' || this.strsubstring == '.gif')
                        {
                          this.elRef.nativeElement.parentElement.getElementsByTagName('img').item(0).src = event.target.result;
                          this.elRef.nativeElement.parentElement.getElementsByClassName('viewImage').item(0).href = event.target.result;
                          this.elRef.nativeElement.parentElement.getElementsByClassName('img-size').item(0).innerHTML = (Filesize + 'KB');
                          this.elRef.nativeElement.parentElement.getElementsByClassName('img-name').item(0).innerHTML = FileName;
                          this.elRef.nativeElement.parentElement.getElementsByClassName('FileSuccess').item(0).style.display='block';
                          this.elRef.nativeElement.style.display='none';
                        }
                        else {
                          alert('Upload only Valid Format - *.jpg, *.jpeg, *.png, *.gif');
                          this.elRef.nativeElement.value = '';
                        }
       // **//


      }
    }

  }

}
