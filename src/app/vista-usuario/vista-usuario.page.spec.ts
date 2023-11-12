import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaUsuarioPage } from './vista-usuario.page';

describe('VistaUsuarioPage', () => {
  let component: VistaUsuarioPage;
  let fixture: ComponentFixture<VistaUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
