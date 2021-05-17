import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Notas} from "../../app/interfaces/notas";
import {ServicioNotasService} from "../servicio-notas.service";
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-ednotas',
  templateUrl: './ednotas.component.html',
  styleUrls: ['./ednotas.component.scss']
})
export class EdnotasComponent implements OnInit {
  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
 // lista:Array<String>=[];
  /*lista2 tiene la lista de instancias de usuarios */
  Lista2:Array<Notas>=[];
  idactual:number;
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
    this.idactual=0;
   
    
  }
   
  ngOnInit(): void {
    this.titulo=this.formulario.get('titulo') as FormGroup;
    this.estado=this.formulario.get('estado') as FormGroup;
    this.descripcion=this.formulario.get('descripcion') as FormGroup;
    
    this.servicioNota.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.Lista2.push(datos[i]);
      }
      
      ////
    this.route.paramMap.subscribe(params=>{

        let intento = params.get("id");
        let notaId = 0;
        if(intento!=null){
          notaId=+intento;
          this.idactual=+intento;
          console.log("id o algo  " + notaId);
          this.editar(notaId);
        }
      });

      ////
      console.log("llenado lista2 "+datos);
    });
    /*this.route.paramMap.subscribe(params=>{

      let intento = params.get("id");
      let notaId = 0;
      if(intento!=null){
        notaId=+intento;
        this.idactual=+intento;
        console.log("id o algo  " + notaId);
        this.editar(notaId);
      }
    });*/
    
  }
  editar(id:number){
    console.log("EDITAR");
    console.log("LARGO LISTA  aa  "+this.Lista2.length);
    for(let i=0; i< this.Lista2.length ;i++){
      if(this.Lista2[i].id==id){
        this.formulario.patchValue({
          titulo: this.Lista2[i].titulo,
          estado: this.Lista2[i].estado,
          descripcion: this.Lista2[i].descripcion
        })
      }
    } 
  }
  Crear(){
    console.log("largo lista 2 en crear "+this.Lista2.length);
    var test: Notas = {
      id:this.idactual,
      titulo:this.titulo.value,
      estado:this.estado.value,
      descripcion:this.descripcion.value,
  
    };
    //console.log("impirme  "+this.estado.value);
    
    //console.log("para id " + this.Lista2[0].id);
    /*if(this.Lista2.length==0){
      console.log('LISTA VACIA ')
      
    }
    if(this.Lista2.length!=0){
      for(let i=0; i < this.Lista2.length ;i++){
        if(i == (this.Lista2.length-1)){
          test.id=i+1;
        }
      }
    }*/
    //console.log("test id = "+ test.id);
    this.Lista2.forEach((item,index)=>{
      if(test.id==item.id){
        this.Lista2.splice(index,1,test);
      }
    })
    //this.Lista2.push(test);
    this.servicioNota.Guardar(this.Lista2).subscribe(datos=>{
      //console.log("lo que estoy recibiendo");  
      console.log("RECIVO ESTOOOOO"+ datos);
    });
  
  }



}
