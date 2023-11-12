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
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'PagInicio',
    loadChildren: () => import('./PagInicio/PagInicio.module').then( m => m.PagInicioPageModule)
  },  {
    path: 'usu-reg-propiedades',
    loadChildren: () => import('./usu-reg-propiedades/usu-reg-propiedades.module').then( m => m.UsuRegPropiedadesPageModule)
  },

  // {
  //   path: 'cliente/listar',
  //   loadChildren: () => import('./cliente/cliente.listar/cliente.listar.module').then( m => m.ClienteListarPageModule)
  // },
  // {
  //   path: 'cliente/agregar',
  //   loadChildren: () => import('./cliente/cliente.agregar/cliente.agregar.module').then( m => m.ClienteAgregarPageModule)
  // },
  // {
  //   path: 'cliente/actualizar',
  //   loadChildren: () => import('./cliente/cliente.actualizar/cliente.actualizar.module').then( m => m.ClienteActualizarPageModule)
  // },
  // {
  //   path: 'cliente/eliminar',
  //   loadChildren: () => import('./cliente/cliente.eliminar/cliente.eliminar.module').then( m => m.ClienteEliminarPageModule)
  // },
  // {
  //   path: 'cliente/leer',
  //   loadChildren: () => import('./cliente/cliente.leer/cliente.leer.module').then( m => m.ClienteLeerPageModule)
  // },
  // {
  //   path: 'producto/add',
  //   loadChildren: () => import('./producto/producto.add/producto.add.module').then( m => m.ProductoAddPageModule)
  // },
  // {
  //   path: 'producto/list',
  //   loadChildren: () => import('./producto/producto.list/producto.list.module').then( m => m.ProductoListPageModule)
  // },
  // {
  //   path: 'producto/detail/:id',
  //   loadChildren: () => import('./producto/producto.detail/producto.detail.module').then( m => m.ProductoDetailPageModule)
  // },
  // {
  //   path: 'producto/edit/:id',
  //   loadChildren: () => import('./producto/producto.edit/producto.edit.module').then( m => m.ProductoEditPageModule)
  // },
  // {
  //   path: 'producto/all',
  //   loadChildren: () => import('./producto/producto.all/producto.all.module').then( m => m.ProductoAllPageModule)
  // },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
