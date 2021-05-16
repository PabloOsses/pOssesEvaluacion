import { Component, OnInit } from '@angular/core';
import {Notas,ListaNotas} from "../../app/interfaces/notas";
import {Router} from "@angular/router"
@Component({
  selector: 'app-minotas',
  templateUrl: './minotas.component.html',
  styleUrls: ['./minotas.component.scss']
})
export class MinotasComponent implements OnInit {
  Lista:Array<Notas>=ListaNotas;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Eliminar(id:number){
    console.log("nuevo idididid   "+ id);
    //this.Lista.splice(id,1);
    this.Lista.forEach((item,index)=>{
      if(id==item.id){
        this.Lista.splice(index,1);
      }
    })
  }
  /*Editar(id:number){
    this.router.navigate(['/editar',id]);
  }*/
}
