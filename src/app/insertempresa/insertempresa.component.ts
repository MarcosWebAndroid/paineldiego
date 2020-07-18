import { AngularFireStorage } from '@angular/fire/storage';
import { Dados } from './dados';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IdeaService , Idea} from '../services/idea.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { FormsModule }   from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';

//import { storage } from 'firebase';

@Component({
  selector: 'app-insertempresa',
  templateUrl: './insertempresa.component.html',
  styleUrls: ['./insertempresa.component.sass']
})
export class InsertempresaComponent implements OnInit {
  private ideas: Observable<Idea[]>;
  listas =[];
  nome: string;
  email: string;
  logo: File = null;
  formlogo: any;
  id : string=null;
  url:any;
  mostrarlogo = false;
  mostrartopo = false;
  mostrarcartao = false;
  mostrarfotos = false;
  dados: Dados;
  imgselecionado: any = null;
  toposelecionado: any = null;
  cartaoselecionado: any =null;
  capavideoselecionado: any =null;
  foto01selecionado: any =null;
  foto02selecionado: any =null;
  foto03selecionado: any =null;
  foto04selecionado: any =null;
  foto05selecionado: any =null;
  foto06selecionado: any =null;


  // IMAGEM UPLOADS
  uploadlogo: string = null;
  uploadtopo: string = null;
  uploadcartao: string = null;
  uploadcvideo: string = null;
  uploadfoto01: string = null;
  uploadfoto02: string = null;
  uploadfoto03: string = null;
  uploadfoto04: string = null;
  uploadfoto05: string = null;
  uploadfoto06: string = null;
  teste: string = null;

constructor(public router: Router,
  private afs: AngularFirestore,
  private ideaService: IdeaService,
  private activeRoute: ActivatedRoute,
  private sanitizer: DomSanitizer,
  public auth: AngularFireAuthModule,
  private http:HttpClient,
  private storage: AngularFireStorage
 ) { 



 }


  ngOnInit() {
        this.dados = new Dados();
  }

  // adicionar imagens

  imglogo(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.imgselecionado = event.target.files[0];
   
    }
  }

  imgtopo(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.toposelecionado = event.target.files[0];
    }
  }

  imgcartao(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.cartaoselecionado = event.target.files[0];
    }
  }

  imgcvideo(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.capavideoselecionado = event.target.files[0];
    }
  }

  imgfoto01(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto01selecionado = event.target.files[0];

    }
  }

  imgfoto02(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto02selecionado = event.target.files[0];
    }
  }

  imgfoto03(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto03selecionado = event.target.files[0];
    }
  }

  imgfoto04(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto04selecionado = event.target.files[0];
    }
  }

  imgfoto05(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto05selecionado = event.target.files[0];
    }
  }

  imgfoto06(event){
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto06selecionado = event.target.files[0];
    }
  }




  adicionar(dados){

    let id = this.afs.createId();
    let avaliacao = "";
    let criacao = new Date().toString();
    let status = '';
    let tipo = "empresa"
   this.afs.collection<Idea>('Empresas').doc(id ).set({
      avaliacao: avaliacao, 
      sobre: dados.sobre,
      capavideo:this.uploadcvideo ,
      img: this.uploadlogo,
      topo: this.uploadtopo,
      cartoes:this.uploadcartao,
      caracteristica:dados.caracteristica,
      categoria: dados.categoria,
      email: dados.email,
      empresa: id,
      endereco: dados.endereco,
      foto01: this.uploadfoto01,
      foto02: this.uploadfoto02,
      foto03: this.uploadfoto03,
      foto04: this.uploadfoto04,
      foto05: this.uploadfoto05,
      foto06: this.uploadfoto06,
      promocao: dados.promocao,
      nome: dados.nome, 
      criacao: criacao,
      horario_inicio: dados.horario_inicio,
      horario_fim: dados.horario_fim,
      id: id ,
      status:status,
      subcategoria: dados.subcategoria,
      telefone: dados.telefone,
      tipo: tipo,
      video: dados.video,
      mapa: dados.mapa,
      
    });

    let data = new Date();
  
     
    // UPLOAD DA LOGO 

      let path = `empresas/${this.imgselecionado.name}_${data}`;
      const localref = this.storage.ref(path);
      this.storage.upload( path, this.imgselecionado).snapshotChanges().pipe(
      finalize(()=>{
          localref.getDownloadURL().subscribe((url)=>{
                this.uploadlogo = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({img: url})
          })
              })
                  ).subscribe();

      // UPLOAD DO TOPO
      let pathtopo = `empresas/${this.toposelecionado.name}_${data}`;
      const localtopo = this.storage.ref(pathtopo);
      this.storage.upload( pathtopo, this.toposelecionado).snapshotChanges().pipe(
      finalize(()=>{
        localtopo.getDownloadURL().subscribe((url)=>{
                this.uploadtopo = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({topo: url})
          })
              })
                  ).subscribe();

                  

                       // UPLOAD DO CARTAO
      let pathcartao = `empresas/${this.cartaoselecionado.name}_${data}`;
      const localcartao= this.storage.ref(pathcartao);
      this.storage.upload( pathcartao, this.cartaoselecionado).snapshotChanges().pipe(
      finalize(()=>{
        localcartao.getDownloadURL().subscribe((url)=>{
                this.uploadcartao = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({cartoes: url})
          })
              })
                  ).subscribe();

                                    // UPLOAD DO CAPA DO VIDEO
      let pathcapavideo = `empresas/${this.capavideoselecionado.name}_${data}`;
      const localcapavideo= this.storage.ref(pathcapavideo);
      
      this.storage.upload( pathcapavideo, this.capavideoselecionado).snapshotChanges().pipe(
      finalize(()=>{
        localcapavideo.getDownloadURL().subscribe((url)=>{
                this.uploadcvideo = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({capavideo: url})
          })
              })
                  ).subscribe();

           // UPLOAD DA FOTO 02
           let pathfoto01 = `empresas/${this.foto01selecionado.name}_${data}`;
           const localfoto01= this.storage.ref(pathfoto01);
           this.storage.upload( pathfoto01, this.foto01selecionado).snapshotChanges().pipe(
           finalize(()=>{
             localfoto01.getDownloadURL().subscribe((url)=>{
                     this.uploadfoto01 = url;
                     this.afs.collection<Idea>('Empresas').doc(id ).update({foto01: url})
               })
                   })
                       ).subscribe();
     

                   // UPLOAD DA FOTO 02
      let pathfoto02 = `empresas/${this.foto02selecionado.name}_${data}`;
      const localfoto02= this.storage.ref(pathfoto02);
      this.storage.upload( pathfoto02, this.foto02selecionado).snapshotChanges().pipe(
      finalize(()=>{
        localfoto02.getDownloadURL().subscribe((url)=>{
                this.uploadfoto02 = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({foto02: url})
          })
              })
                  ).subscribe();

              // UPLOAD DA FOTO 03
  let pathfoto03 = `empresas/${this.foto03selecionado.name}_${data}`;
  const localfoto03= this.storage.ref(pathfoto03);
  this.storage.upload( pathfoto03, this.foto03selecionado).snapshotChanges().pipe(
  finalize(()=>{
    localfoto03.getDownloadURL().subscribe((url)=>{
        this.uploadfoto03 = url;
  this.afs.collection<Idea>('Empresas').doc(id ).update({foto03: url})
       })
             })
           ).subscribe();

       // UPLOAD DA FOTO 04
       let pathfoto04 = `empresas/${this.foto04selecionado.name}_${data}`;
      const localfoto04= this.storage.ref(pathfoto04);
      this.storage.upload( pathfoto04, this.foto04selecionado).snapshotChanges().pipe(
      finalize(()=>{
        localfoto04.getDownloadURL().subscribe((url)=>{
                this.uploadfoto04 = url;
                this.afs.collection<Idea>('Empresas').doc(id ).update({foto04: url})
          })
              })
                  ).subscribe();

      // UPLOAD DA FOTO 05
      let pathfoto05 = `empresas/${this.foto05selecionado.name}_${data}`;
      const localfoto05= this.storage.ref(pathfoto05);
      this.storage.upload( pathfoto05, this.foto05selecionado).snapshotChanges().pipe(
      finalize(()=>{
      localfoto05.getDownloadURL().subscribe((url)=>{
            this.uploadfoto04 = url;
      this.afs.collection<Idea>('Empresas').doc(id ).update({foto05: url})
           })
                 })
               ).subscribe();
       // UPLOAD DA FOTO 05
       let pathfoto06 = `empresas/${this.foto06selecionado.name}_${data}`;
       const localfoto06= this.storage.ref(pathfoto06);
       this.storage.upload( pathfoto06, this.foto06selecionado).snapshotChanges().pipe(
       finalize(()=>{
       localfoto06.getDownloadURL().subscribe((url)=>{
             this.uploadfoto06 = url;
       this.afs.collection<Idea>('Empresas').doc(id ).update({foto06: url})
            })
                  })
                ).subscribe();
     



                  
   alert('Dados da empresa Cadastrado com sucesso!')  ;
   this.router.navigate(['/empresas/']);
  
  }

  

}
