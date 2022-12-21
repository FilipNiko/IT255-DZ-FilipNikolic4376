import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetRowComponent } from './let/let.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { FormaComponent } from './forma/forma.component';
import { FlightServiceService } from './services/flight-service.service';
import { CenaComponent } from './cena/cena.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudServiceService } from './services/crud-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LetRowComponent,
    NavTabsComponent,
    PreporukaComponent,
    ONamaComponent,
    PonudaComponent,
    FormaComponent,
    CenaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FlightServiceService, CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
