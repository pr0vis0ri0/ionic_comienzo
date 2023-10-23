import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  imagenes=[
    '/assets/DEPARTAMENTO-1V2.jpg',
    '/assets/DEPARTAMENTO-2V2.jpg',
    '/assets/DEPARTAMENTO-3V2.jpg',
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  swiperSlideChanged(e:any){
    console.log('changed: ',e)
  }
}
