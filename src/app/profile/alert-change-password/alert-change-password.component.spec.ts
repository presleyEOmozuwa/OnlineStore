import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertChangePasswordComponent } from './alert-change-password.component';

describe('AlertChangePasswordComponent', () => {
  let component: AlertChangePasswordComponent;
  let fixture: ComponentFixture<AlertChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
