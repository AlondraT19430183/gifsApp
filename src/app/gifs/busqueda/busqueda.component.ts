import { Component, ViewChild} from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {
  @ViewChild('txtBuscar') txtBuscar:any;

  buscar (){
    const valor: string = this.txtBuscar.nativeElement.value;
    if (valor.trim().length===0){
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value='';
  }
 
  constructor ( private gifService : GifService ) { }

  
}
