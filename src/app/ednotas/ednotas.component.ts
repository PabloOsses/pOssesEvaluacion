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

  /*lista2 tiene la lista de notas (el nombre quedo del quiz anterior) */
  Lista2:Array<Notas>=[];
  idactual:number;
  /*idactual toma el valor del id de la nota a editar  */
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
    

    /*Aqui se reciven los datos del metodo GET*/
    this.servicioNota.Consultar().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.Lista2.push(datos[i]);
      }
      
    /*En el fondo es un subscribe dentro de otro subscribe, es la unica forma 
    en que logre que primero se llenara Lista2 con los datos del metodo GET
    y despues se llenaran los datos del formulario con la informacion de la
    nota respectiva */
      this.route.paramMap.subscribe(params=>{
          
          let intento = params.get("id");
          
          if(intento!=null){
            
            this.idactual=+intento;
            /*idactual toma el valor del id de la nota a editar  */
            console.log("id de nota a editar " + this.idactual);
            this.editar();
          }
        });

      
      console.log("llenado lista2 "+datos);
    });
    
    
  }
  /*La funcion editar llena los input del formulario con informacion, que
  es la informacion original de la nota que se quiere editar */
  editar(){
    console.log("EDITAR");
    //console.log("LARGO LISTA2 "+this.Lista2.length);
    for(let i=0; i< this.Lista2.length ;i++){
      if(this.Lista2[i].id==this.idactual){
        this.formulario.patchValue({
          titulo: this.Lista2[i].titulo,
          estado: this.Lista2[i].estado,
          descripcion: this.Lista2[i].descripcion
        })
      }
    } 
  }
  Crear(){
    
    var test: Notas = {
      id:this.idactual,
      titulo:this.titulo.value,
      estado:this.estado.value,
      descripcion:this.descripcion.value,
  
    };
    //console.log("impirme  "+this.estado.value);
    //console.log("para id " + this.Lista2[0].id);
    //console.log("test id = "+ test.id);


    /*En eset caso se elimina la nota antigua de la lista 
    y se reemplaza por la nueva */
    this.Lista2.forEach((item,index)=>{
      if(test.id==item.id){
        this.Lista2.splice(index,1,test);
      }
    })
   
    /*Metodo POST , se envia la lista de notas completa */
    this.servicioNota.Guardar(this.Lista2).subscribe(datos=>{
      //console.log("lo que estoy recibiendo");  
      console.log("Datos recibidos en edicion"+ datos);
    });
  
  }



}
