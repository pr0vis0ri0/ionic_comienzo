import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropiedadesPage } from './propiedades.page';

describe('PropiedadesPage', () => {
  let component: PropiedadesPage;
  let fixture: ComponentFixture<PropiedadesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PropiedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
