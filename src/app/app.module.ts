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

@NgModule({
  declarations: [
    AppComponent,
    LetRowComponent,
    NavTabsComponent,
    PreporukaComponent,
    ONamaComponent,
    PonudaComponent,
    FormaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
