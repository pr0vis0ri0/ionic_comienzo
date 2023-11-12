import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableModule } from 'primeng/table';

registerLocaleData(localeCl, 'es-CL');

@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, SidebarComponent],
  imports: 
    [BrowserModule, 
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: localeCl, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
