import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importe RouterModule e Routes
import { TabelaComponent } from './tabela/tabela.component'; // Importe seu componente tabela

const routes: Routes = [
  { path: '/teste', component: TabelaComponent }, 
];

@NgModule({
  declarations: [
    TabelaComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure as rotas aqui
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

// @NgModule({
//   declarations: [
//     AppComponent // Se o AppComponent existir, adicione-o aqui
//   ],
//   imports: [
//     MatSlideToggleModule ,
//     BrowserModule
//    // Adicione o MatSlideToggleModule aos imports
//   ],
//   providers: [],
//   bootstrap: [AppComponent] // Se o AppComponent existir, adicione-o aqui
// })
// export class AppModule { }
