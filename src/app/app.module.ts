import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EmpresasComponent } from './empresas/empresas.component';
import { DetalhesempresaComponent } from './detalhesempresa/detalhesempresa.component';
import { HomeComponent } from './home/home.component';
import { EditarempresaComponent } from './editarempresa/editarempresa.component';
import { FormsModule }   from '@angular/forms';
import { InsertempresaComponent } from './insertempresa/insertempresa.component'; 
import {HttpClientModule} from '@angular/common/http';

import { AngularFireStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    DetalhesempresaComponent,
    HomeComponent,
    EditarempresaComponent,
    InsertempresaComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    BrowserModule,
    FormsModule ,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
