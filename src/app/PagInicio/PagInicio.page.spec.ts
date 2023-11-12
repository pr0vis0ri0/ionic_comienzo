import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagInicioPage } from './PagInicio.page';

describe('InicioPage', () => {
  let component: PagInicioPage;
  let fixture: ComponentFixture<PagInicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});