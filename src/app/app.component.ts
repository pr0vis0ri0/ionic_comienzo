import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  navegarA(ruta : string){
    this.router.navigate([ruta]);
    this.menu.close('first');
  }

  cerrarMenu() {
    this.menu.close('first');
  }
}
