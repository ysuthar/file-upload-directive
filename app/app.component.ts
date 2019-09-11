import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  url = '';
  uploaded = false;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
      var img = new Image;
        this.url = event.target.result;
        this.uploaded = true;
        img.src = event.target.result;
        console.log(img.width);
      }
    }
  }
}
