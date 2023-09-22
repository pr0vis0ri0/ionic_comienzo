import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteLeerPage } from './cliente.leer.page';

describe('ClienteLeerPage', () => {
  let component: ClienteLeerPage;
  let fixture: ComponentFixture<ClienteLeerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteLeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
