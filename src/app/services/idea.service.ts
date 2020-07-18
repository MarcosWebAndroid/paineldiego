import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { first } from 'rxjs/operators';

export interface Idea {
  id : '',
  nome:'',
  categoria: '',
  img: '',
  video:'',
  // estrelas
  iduser: '',
  contador: '',
  idempresa: '',
  avaliacao: '', 
  resultado: '',
  usuarios: '',
  ultimo: '',
  // favoritos
  usuario: '',
  empresa: '',
  status: '',

  // galeria
  foto01: '',
  foto02: '',
  foto03: '',
  foto04: '',
  foto05: '',
  foto06: '',
  topo: '',

  // Empresas
  subcategoria: '',
  email: '',
  mapa: '',
}


@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;

  constructor(private afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('Empresas/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  pegarempresas(data: string){

var ordenacao =  this.afs.collection<Idea>( "Empresas", ref => ref.where('tipo', '==', data)).valueChanges()


    return ordenacao ;
  }

  detalhesempresa(data: string){

    var ordenacao =  this.afs.collection<Idea>( "Empresas", ref => ref.where('id', '==', data)).valueChanges()
    
    
        return ordenacao ;
      }
  pegarDadosatualizar( id: string , email: string ){

    
    return this.afs.collection<Idea>("Empresas/").doc(id).update({email: email});

   }
   cancelar(data: string, situacao:string){


    return this.afs.collection<Idea>("Empresas/").doc(data).update({ situacao: situacao});

   }

  pegarDados(user: string): Observable<Idea[]> {

 let userid = user.toString();


  var ordenacao =  this.afs.collection<Idea>( "Empresas", ref => ref.orderBy("data", "desc").where('id', '==', user)).valueChanges()


    return ordenacao ;



  }


  pegarAberto(situacao: string): Observable<Idea[]> {

    let aberto = situacao.toString();


     var ordenacao =  this.afs.collection<Idea>( "Empresas", ref => ref.orderBy("data", "desc").where('situacao', '==', aberto)).valueChanges()


       return ordenacao ;



     }


  addIdea(idea: Idea): Promise<DocumentReference> {

       return this.ideaCollection.add(idea);

  }
  pegargeral(tipo: string){
    var ordenacao =  this.afs.collection<Idea>( "Empresas", ref => ref.orderBy("data", "desc").where('tipo', '==', tipo)).valueChanges()
    return ordenacao ;

  }

  pegaruser(user: string): Observable<Idea[]>{
    this.ideaCollection = this.afs.collection<Idea>('Usuários/')
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    let usuario = user.toString();
    var dados =  this.afs.collection<Idea>( "Usuários", ref => ref.where('id', '==', usuario)).valueChanges()


    return dados;
  }
 // updateIdea(idea: Idea): Promise<void> {
  //  return this.ideaCollection.doc(idea.id).update({ dia: idea.dia, nome: idea.nome , assunto: idea.assunto});
 //}

  deleteIdea(data: string) {
    return this.afs.collection<Idea>("Empresas/").doc(data).delete()
  //  return this.ideaCollection.doc(data).delete();
  }
}
