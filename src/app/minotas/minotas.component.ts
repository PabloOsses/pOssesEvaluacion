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
  //Lista:Array<Notas>=ListaNotas;
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
    console.log("nuevo idididid   "+ id);
    //this.Lista.splice(id,1);
    this.Lista.forEach((item,index)=>{
      if(id==item.id){
        this.Lista.splice(index,1);
      }
    })
    this.servicioNota.Guardar(this.Lista).subscribe(datos=>{
      //console.log("lo que estoy recibiendo");  
      console.log("ELIMINO "+ datos);
    });
  
  
  }
  /*Editar(id:number){
    this.router.navigate(['/editar',id]);
  }*/
}
