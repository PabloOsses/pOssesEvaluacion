import { Component, OnInit } from '@angular/core';
import {Notas} from "../../app/interfaces/notas";
import {ServicioNotasService} from "../servicio-notas.service";
import {Router} from "@angular/router"
@Component({
  selector: 'app-minotas',
  templateUrl: './minotas.component.html',
  styleUrls: ['./minotas.component.scss']
})
export class MinotasComponent implements OnInit {
  
   Lista:Array<Notas>=[];
  constructor(private router:Router,private servicioNota:ServicioNotasService) { }

  ngOnInit(): void {
    this.servicioNota.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.Lista.push(datos[i]);
      }
      
      
      console.log(datos);
    });
  }
  Eliminar(id:number){
    /*este metodo sucede cuando se perciona la X de la nota para eliminarla*/
    
    /*Se elimina de la lista de notas*/
    this.Lista.forEach((item,index)=>{
      if(id==item.id){
        this.Lista.splice(index,1);
      }
    })
    this.servicioNota.Guardar(this.Lista).subscribe(datos=>{
      /*Se envia la lista mediante POST, sin la nota eliminada*/  
      console.log("ELIMINO "+ datos);
    });
  
  
  }
  
}
