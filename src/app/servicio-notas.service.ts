import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs';
import {Notas} from '../app/interfaces/notas';
@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {
  url="http://localhost:3000/trabajo1/possesEvaluacion/backend/";
  constructor(private http:HttpClient) { }

  Consultar():Observable<any>{
    return this.http.get(`${this.url}enviar.php`);
  }
  Guardar(Lista:Array<Notas>):Observable<any>{
    console.log("LA LISTA ENVIADA ES "+Lista);
    return this.http.post(`${this.url}guardar.php`,JSON.stringify(Lista));

    //return this.servicio.get(`${this.url}guardar.php`);
 }
  
}
