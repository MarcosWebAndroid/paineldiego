import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
//import { NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { IdeaService, Idea } from '../services/idea.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.sass']
})
export class EmpresasComponent implements OnInit {
  private ideas: Observable<Idea[]>;
    listas = [];
    ativo = true;
  constructor(
    public router: Router,
    private afs: AngularFirestore,
    private firestore: AngularFirestore,
    private ideaService: IdeaService,
) { }

  ngOnInit() {

    let tipo = "empresa";
  
    this.ideaService.pegarempresas(tipo).subscribe(res => {

       this.listas = res;
       for(let teste of res){
         console.log(teste.nome)
       }
      console.log(this.listas)
      });



  }

  verdetalhe(registro){
    this.ativo = false;
    console.log(registro.id)
  
    this.router.navigate(['/detalhesempresa/', registro]);
  }

  editar(registro){
    this.ativo = false;
    console.log(registro.id)
  
    this.router.navigate(['/editarempresa/', registro]);
  }

  add(){
    this.ativo = false;
  
  
    this.router.navigate(['/insertempresa/']);
  }

  deletar(id){
    this.afs.collection<Idea>('Empresas').doc(id).delete();
  } 

}
