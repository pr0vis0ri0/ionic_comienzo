import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule )
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('./propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
  {
    path: 'detalle_propiedad/:id',
    loadChildren: () => import('./propiedad-detalle/propiedad-detalle.module').then( m => m.PropiedadDetallePageModule)
  },
  {
    path: 'vista-usuario',
    loadChildren: () => import('./vista-usuario/vista-usuario.module').then( m => m.VistaUsuarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
