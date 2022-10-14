import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private _historial:string[]=[];
  private apikey : string = 'MFhuLxF4BXhp049yy78mYnPaTWmciKlf'
  public resultados: any []=[];

  get historial(){
    return [...this._historial];
  }

  constructor( private http : HttpClient ) {}

 

   buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);

      // fetch('api.giphy.com/v1/gifs/search?api_key=MFhuLxF4BXhp049yy78mYnPaTWmciKlf&limit=10')
      // .then(resp => {
      //   resp.json().then(data=>{
      //     console.log(data);
      //   })
      // })

      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=MFhuLxF4BXhp049yy78mYnPaTWmciKlf&q=${ query }&limit=10`)
          .subscribe( (resp : any )  => {
            console.log(resp.data)
            this.resultados=resp.data;
          })
    }

    

    
    console.log(this._historial)
   } 

}
