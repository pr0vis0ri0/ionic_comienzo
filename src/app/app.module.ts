import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';

registerLocaleData(localeCl, 'es-CL');

@NgModule({
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: 
    [BrowserModule, 
    IonicModule.forRoot({
      mode: 'ios'
    }),
    AppRoutingModule,
    HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: localeCl, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
