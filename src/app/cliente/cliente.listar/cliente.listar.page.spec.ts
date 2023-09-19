import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteListarPage } from './cliente.listar.page';

describe('ClienteListarPage', () => {
  let component: ClienteListarPage;
  let fixture: ComponentFixture<ClienteListarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClienteListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
