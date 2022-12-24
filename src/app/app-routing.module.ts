import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { CenaComponent } from './cena/cena.component';

const routes: Routes = [
{ path: '', redirectTo: 'ponuda', pathMatch: 'full' },
{ path: 'ponuda', component: PonudaComponent },
{ path: 'preporuka', component: PreporukaComponent },
{ path: 'onama', component: ONamaComponent },
{ path: 'cena', component: CenaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
