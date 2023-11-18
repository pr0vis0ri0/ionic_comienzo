import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VsadminPage } from './vsadmin.page';

describe('VsadminPage', () => {
  let component: VsadminPage;
  let fixture: ComponentFixture<VsadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VsadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
