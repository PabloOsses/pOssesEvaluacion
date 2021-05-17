import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Notas} from "../../app/interfaces/notas";
import {ActivatedRoute} from '@angular/router';
import {ServicioNotasService} from "../servicio-notas.service";
@Component({
  selector: 'app-cr-nota',
  templateUrl: './cr-nota.component.html',
  styleUrls: ['./cr-nota.component.scss']
})
export class CrNotaComponent implements OnInit {
  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
 // lista:Array<String>=[];
  /*lista2 tiene la lista de instancias de usuarios */
  Lista2:Array<Notas>=[];
  
  constructor(private fb:FormBuilder, private route:ActivatedRoute,private servicioNota:ServicioNotasService) { 
    this.formulario=this.fb.group({
      titulo:["",[Validators.required, Validators.maxLength(30)]],
      estado:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      descripcion:["",[Validators.required, Validators.maxLength(150)]],
      
    });
    this.titulo=this.formulario.controls["titulo"];
    this.estado=this.formulario.controls["estado"];
    this.descripcion=this.formulario.controls["descripcion"];
    
  }

  ngOnInit(): void {
    this.titulo=this.formulario.get('titulo') as FormGroup;
    this.estado=this.formulario.get('estado') as FormGroup;
    this.descripcion=this.formulario.get('descripcion') as FormGroup;
    

    this.servicioNota.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.Lista2.push(datos[i]);
      }
      
      
      console.log(datos);
    });
  }
  
  Crear(){
    console.log("milk man")
    var test: Notas = {
      id:0,
      titulo:this.titulo.value,
      estado:this.estado.value,
      descripcion:this.descripcion.value,
  
    };
    //console.log("impirme  "+this.estado.value);
    
    //console.log("para id " + this.Lista2[0].id);
    if(this.Lista2.length==0){
      console.log('LISTA VACIA ')
      
    }
    if(this.Lista2.length!=0){
      let max=0;
      for(let i=0; i < this.Lista2.length ;i++){
        /*if(i == (this.Lista2.length-1 ) && this.Lista2[i].id!=i+1){
          test.id=i+1;
        }*/
        if(max<this.Lista2[i].id){
          max=this.Lista2[i].id;
        }
      }
      test.id=max+1;
    }
    //console.log("test id = "+ test.id);
    this.Lista2.push(test);
    this.servicioNota.Guardar(this.Lista2).subscribe(datos=>{
      //console.log("lo que estoy recibiendo");  
      console.log("RECIVO ESTOOOOO"+ datos);
    });
  
  }
  
}
