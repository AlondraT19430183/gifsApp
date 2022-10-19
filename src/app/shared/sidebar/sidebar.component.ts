import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor(private gifsService : GifsService) { }

get historial(){
  return this.gifsService.historial;
  // return this.gifsService.....
}

buscar(termino:string){
  console.log(termino);
  this.gifsService.buscarGifs(termino);
}

}
