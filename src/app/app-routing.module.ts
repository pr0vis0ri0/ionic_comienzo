import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'cliente/listar',
    pathMatch: 'full'
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule )
  // },
  // {
  //   path: 'registro',
  //   loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  // },
  {
    path: 'cliente/listar',
    loadChildren: () => import('./cliente/cliente.listar/cliente.listar.module').then( m => m.ClienteListarPageModule)
  },
  {
    path: 'cliente/agregar',
    loadChildren: () => import('./cliente/cliente.agregar/cliente.agregar.module').then( m => m.ClienteAgregarPageModule)
  },
  {
    path: 'cliente/actualizar',
    loadChildren: () => import('./cliente/cliente.actualizar/cliente.actualizar.module').then( m => m.ClienteActualizarPageModule)
  },
  {
    path: 'cliente/eliminar',
    loadChildren: () => import('./cliente/cliente.eliminar/cliente.eliminar.module').then( m => m.ClienteEliminarPageModule)
  },
  {
    path: 'cliente/leer',
    loadChildren: () => import('./cliente/cliente.leer/cliente.leer.module').then( m => m.ClienteLeerPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
