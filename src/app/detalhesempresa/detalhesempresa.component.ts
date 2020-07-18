import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IdeaService } from '../services/idea.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhesempresa',
  templateUrl: './detalhesempresa.component.html',
  styleUrls: ['./detalhesempresa.component.sass']
})
export class DetalhesempresaComponent implements OnInit {
    listas =[];
    id : string=null;
    url:any;
    mostrarlogo = false;
    mostrartopo = false;
    mostrarcartao = false;
    mostrarfotos = false;
  constructor(public router: Router,
    private firestore: AngularFirestore,
    private ideaService: IdeaService,
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      let video = params.get('video');
      let link = `https://www.youtube.com/embed/`+video;
      console.log(link)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(link)
    this.ideaService.detalhesempresa(this.id).subscribe(res => {
     
      this.listas = res;
      for(let teste of res){
        console.log(teste.nome)
      }
     console.log(this.listas)
     });
    })
  }

  mostrar(){
      this.mostrarlogo = true;
  }

  ocultar(){
    this.mostrarlogo = false;
 
}

topo(){
  this.mostrartopo = true;
}

ocultartopo(){
this.mostrartopo = false;

}

cartao(){
  this.mostrarcartao = true;
}

ocultarcartao(){
this.mostrarcartao = false;

}

fotos(){
  this.mostrarfotos = true;
}

ocultarfotos(){
  this.mostrarfotos = false;

}

}
