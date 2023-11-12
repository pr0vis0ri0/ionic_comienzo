import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuRegPropiedadesPage } from './usu-reg-propiedades.page';

describe('UsuRegPropiedadesPage', () => {
  let component: UsuRegPropiedadesPage;
  let fixture: ComponentFixture<UsuRegPropiedadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuRegPropiedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
