import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {Notas,ListaNotas} from "../../app/interfaces/notas";
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
  Lista2:Array<Notas>=ListaNotas;
  idactual:number;
  constructor(private fb:FormBuilder, private route:ActivatedRoute) {

    this.formulario=this.fb.group({
      titulo:["",[Validators.required, Validators.maxLength(10)]],
      estado:["",[Validators.required, Validators.maxLength(10)]],
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
    

    this.route.paramMap.subscribe(params=>{

      let intento = params.get("id");
      let notaId = 0;
      if(intento!=null){
        notaId=+intento;
        this.idactual=+intento;
        console.log("id o algo  " + notaId);
        this.editar(notaId);
      }
      
      /*if(notaId){
        this.getNota(notaId);
      }*/

    });
  }
  editar(id:number){
    console.log("EDITATUS FLEX");
    this.formulario.patchValue({
      titulo: this.Lista2[id].titulo,
      estado: this.Lista2[id].estado,
      descripcion: this.Lista2[id].descripcion
    })
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
  
  }



}
