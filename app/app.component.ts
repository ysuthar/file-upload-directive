import { Component , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
encapsulation: ViewEncapsulation.None,
})
export class AppComponent  {
  name = 'Angular 4';
  url = '';
  uploaded = false;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      var FileURL = event.target.result;

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 
      var img = new Image;
        this.url = FileURL;
        this.uploaded = true;
        img.src = FileURL;
        console.log(img.width);
      }
    }
  }
}
