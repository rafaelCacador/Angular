import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', //Como o ângular se refere ao component
  standalone: true, //Se o component requer um arquivo .NgModule (API)
  imports: [
    HomeComponent,
  ], //Dependências do componente
  template: ` 
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  
`, //Marcação html e layout do componente
  styleUrls: ['./app.component.css'], //URL do arquivo css
})
export class AppComponent {
  title = 'homez';
}
