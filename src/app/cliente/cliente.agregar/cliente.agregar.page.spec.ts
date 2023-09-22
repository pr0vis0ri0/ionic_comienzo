import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteAgregarPage } from './cliente.agregar.page';

describe('ClienteAgregarPage', () => {
  let component: ClienteAgregarPage;
  let fixture: ComponentFixture<ClienteAgregarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
