import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs';
import {Notas} from '../app/interfaces/notas';
@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {
  /*CAMBIAR URL de acuerdo al lugar en donde este almacenado el proyecto */
  url="http://localhost:3000/trabajo1/possesEvaluacion/backend/";
  constructor(private http:HttpClient) { }


  /*METODO GET */
  Consultar():Observable<any>{
    return this.http.get(`${this.url}consultar.php`);
  }
  /*METODO POST */
  Guardar(Lista:Array<Notas>):Observable<any>{
    console.log("LA LISTA ENVIADA ES "+Lista);
    return this.http.post(`${this.url}guardar.php`,JSON.stringify(Lista));

    
 }
  
}
