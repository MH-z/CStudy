import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './components/header/header.component';
import { HakkindaComponent } from './components/hakkinda/hakkinda.component';
import { DeneyimlerComponent } from './components/deneyimler/deneyimler.component';
import { ModaldeneyimlerComponent } from './components/modaldeneyimler/modaldeneyimler.component';
import { EgitimComponent } from './components/egitim/egitim.component';
import { ModalEgitimComponent } from './components/modal-egitim/modal-egitim.component';
import { IlgialanlariComponent } from './components/ilgialanlari/ilgialanlari.component';
import { DigerGoruntulenenlerComponent } from './components/diger-goruntulenenler/diger-goruntulenenler.component';
import { KartComponent } from './components/kart/kart.component';
import { ModalIlgialaniComponent } from './components/modal-ilgialani/modal-ilgialani.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    HakkindaComponent,
    DeneyimlerComponent,
    ModaldeneyimlerComponent,
    EgitimComponent,
    ModalEgitimComponent,
    IlgialanlariComponent,
    DigerGoruntulenenlerComponent,
    KartComponent,
    ModalIlgialaniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
