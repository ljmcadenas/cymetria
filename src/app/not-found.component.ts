import { Component } from '@angular/core';

@Component({
  template: `
    <section class="text-center">
      <img src="assets/images/404.jpg"/>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-info" routerLink="/home">Ir a la página principal</button>        
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class NotFoundComponent {

  constructor() { }

}
