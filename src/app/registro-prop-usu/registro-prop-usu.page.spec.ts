import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPropUsuPage } from './registro-prop-usu.page';

describe('RegistroPropUsuPage', () => {
  let component: RegistroPropUsuPage;
  let fixture: ComponentFixture<RegistroPropUsuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroPropUsuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
