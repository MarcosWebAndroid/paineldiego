import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IdeaService , Idea} from '../services/idea.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { FormsModule }   from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-editarempresa',
  templateUrl: './editarempresa.component.html',
  styleUrls: ['./editarempresa.component.sass']
})
export class EditarempresaComponent implements OnInit {
  private ideas: Observable<Idea[]>;
  listas =[];
    id : string=null;
    url:any;
    mostrarlogo = false;
    mostrartopo = false;
    mostrarcartao = false;
    mostrarfotos = false;

    logo: File = null;
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

  constructor(public router: Router,
    private firestore: AngularFirestore,
    private afs: AngularFirestore,
    private ideaService: IdeaService,
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public auth: AngularFireAuthModule,
    private http:HttpClient,
    private storage: AngularFireStorage) { }

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

 // adicionar imagens

  imglogo(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.imgselecionado = event.target.files[0];

      let path = `empresas/${this.imgselecionado.name}_${data}`;
      const localref = this.storage.ref(path);
      this.storage.upload( path, this.imgselecionado).snapshotChanges().pipe(
      finalize(()=>{
          localref.getDownloadURL().subscribe((url)=>{
                this.uploadlogo = url;
                this.afs.collection<Idea>('Empresas').doc(  this.id ).update({img: url})
          })
              })
                  ).subscribe();
   
    }
  
  }

  imgtopo(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.toposelecionado = event.target.files[0];

      let pathtopo = `empresas/${this.toposelecionado.name}_${data}`;
      const localtopo = this.storage.ref(pathtopo);
      this.storage.upload( pathtopo, this.toposelecionado).snapshotChanges().pipe(
      finalize(()=>{
        localtopo.getDownloadURL().subscribe((url)=>{
                this.uploadtopo = url;
                this.afs.collection<Idea>('Empresas').doc(this.id ).update({topo: url})
          })
              })
                  ).subscribe();

                  
    }
  }

  imgcartao(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.cartaoselecionado = event.target.files[0];
      let pathcartao = `empresas/${this.cartaoselecionado.name}_${data}`;
      const localcartao= this.storage.ref(pathcartao);
      this.storage.upload( pathcartao, this.cartaoselecionado).snapshotChanges().pipe(
      finalize(()=>{
        localcartao.getDownloadURL().subscribe((url)=>{
                this.uploadcartao = url;
                this.afs.collection<Idea>('Empresas').doc(this.id ).update({cartoes: url})
          })
              })
                  ).subscribe();

    }
  }

  imgcvideo(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.capavideoselecionado = event.target.files[0];

      let pathcapavideo = `empresas/${this.capavideoselecionado.name}_${data}`;
      const localcapavideo= this.storage.ref(pathcapavideo);
      
      this.storage.upload( pathcapavideo, this.capavideoselecionado).snapshotChanges().pipe(
      finalize(()=>{
        localcapavideo.getDownloadURL().subscribe((url)=>{
                this.uploadcvideo = url;
                this.afs.collection<Idea>('Empresas').doc(this.id ).update({capavideo: url})
          })
              })
                  ).subscribe();

    }
  }

  imgfoto01(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto01selecionado = event.target.files[0];

      let pathfoto01 = `empresas/${this.foto01selecionado.name}_${data}`;
      const localfoto01= this.storage.ref(pathfoto01);
      this.storage.upload( pathfoto01, this.foto01selecionado).snapshotChanges().pipe(
      finalize(()=>{
        localfoto01.getDownloadURL().subscribe((url)=>{
                this.uploadfoto01 = url;
                this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto01: url})
          })
              })
                  ).subscribe();

    }
  }

  imgfoto02(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto02selecionado = event.target.files[0];

      let pathfoto02 = `empresas/${this.foto02selecionado.name}_${data}`;
   const localfoto02= this.storage.ref(pathfoto02);
   this.storage.upload( pathfoto02, this.foto02selecionado).snapshotChanges().pipe(
   finalize(()=>{
     localfoto02.getDownloadURL().subscribe((url)=>{
             this.uploadfoto02 = url;
             this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto02: url})
       })
           })
               ).subscribe();
    }
  }

  imgfoto03(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto03selecionado = event.target.files[0];
      let pathfoto03 = `empresas/${this.foto03selecionado.name}_${data}`;
const localfoto03= this.storage.ref(pathfoto03);
this.storage.upload( pathfoto03, this.foto03selecionado).snapshotChanges().pipe(
finalize(()=>{
 localfoto03.getDownloadURL().subscribe((url)=>{
     this.uploadfoto03 = url;
this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto03: url})
    })
          })
        ).subscribe();
    }
  }

  imgfoto04(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto04selecionado = event.target.files[0];
      let pathfoto04 = `empresas/${this.foto04selecionado.name}_${data}`;
      const localfoto04= this.storage.ref(pathfoto04);
      this.storage.upload( pathfoto04, this.foto04selecionado).snapshotChanges().pipe(
      finalize(()=>{
        localfoto04.getDownloadURL().subscribe((url)=>{
                this.uploadfoto04 = url;
                this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto04: url})
          })
              })
                  ).subscribe();
   
    }
  }

  imgfoto05(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto05selecionado = event.target.files[0];
      let pathfoto05 = `empresas/${this.foto05selecionado.name}_${data}`;
      const localfoto05= this.storage.ref(pathfoto05);
      this.storage.upload( pathfoto05, this.foto05selecionado).snapshotChanges().pipe(
      finalize(()=>{
      localfoto05.getDownloadURL().subscribe((url)=>{
            this.uploadfoto04 = url;
      this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto05: url})
           })
                 })
               ).subscribe();
    }
  }

  imgfoto06(event){
    let data = new Date();
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.logo = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.foto06selecionado = event.target.files[0];
      let pathfoto06 = `empresas/${this.foto06selecionado.name}_${data}`;
      const localfoto06= this.storage.ref(pathfoto06);
      this.storage.upload( pathfoto06, this.foto06selecionado).snapshotChanges().pipe(
      finalize(()=>{
      localfoto06.getDownloadURL().subscribe((url)=>{
            this.uploadfoto06 = url;
      this.afs.collection<Idea>('Empresas').doc(this.id ).update({foto06: url})
           })
                 })
               ).subscribe();
    }
  }



atualizar(registro){
  let id = registro.id;
  let data = new Date();
  this.afs.collection<Idea>('Empresas').doc( registro.id ).update({
    nome: registro.nome,
    categoria: registro.categoria,
    subcategoria: registro.subcategoria,
    promocao: registro.promocao,
    telefone: registro.telefone,
    sobre: registro.sobre,
    horario_inicio: registro.horario_inicio,
    horario_fim: registro.horario_fim,
    endereco: registro.endereco,
    mapa: registro.mapa,
    video: registro.video,
  })

   // UPLOAD DA LOGO 
   
  
          
   // UPLOAD DO TOPO
  
               

                    // UPLOAD DO CARTAO
  

                                 // UPLOAD DO CAPA DO VIDEO
  

        // UPLOAD DA FOTO 02
       
  

                // UPLOAD DA FOTO 02
   

           // UPLOAD DA FOTO 03


    // UPLOAD DA FOTO 04

   // UPLOAD DA FOTO 05

    // UPLOAD DA FOTO 05
   
  




alert('Empresa Atualizada com Sucesso!')
this.router.navigate(['/empresas/']);
}

}
