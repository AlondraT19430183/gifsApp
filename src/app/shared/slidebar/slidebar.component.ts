import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {

  constructor(private gifsService:GifService){
    
  }

  get historial(){
    return this.gifsService.historial;
  }
  
}
