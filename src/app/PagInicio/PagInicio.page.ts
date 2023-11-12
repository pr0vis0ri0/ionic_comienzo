import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './PagInicio.page.html',
  styleUrls: ['./PagInicio.page.scss'],
})
export class PagInicioPage implements OnInit {

  imagenes=[
    '/assets/img/DEPARTAMENTO-1V2.jpg',
    '/assets/img/DEPARTAMENTO-2V2.jpg',
    '/assets/img/DEPARTAMENTO-3V2.jpg',
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  swiperSlideChanged(e:any){
    console.log('changed: ',e)
  }
}