import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode'
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtPayload } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {
  userProfile : any;

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit(): void {
    const token = this.devolverToken();
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token as string);
      const perfil = decoded.id_perfil as number;
      this.userProfile = 1;
    }
  }

  devolverToken() : string | null {
    return localStorage.getItem('token');
  }

  navigateTo(ruta : string){
    this.router.navigate([ruta]);
    this.menu.close('first');
  }

  cerrarMenu() {
    this.menu.close('first');
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.menu.close('first');
  }
}
