import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteEliminarPage } from './cliente.eliminar.page';

describe('ClienteEliminarPage', () => {
  let component: ClienteEliminarPage;
  let fixture: ComponentFixture<ClienteEliminarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteEliminarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
