import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertResetPasswordComponent } from './alert-reset-password.component';

describe('AlertResetPasswordComponent', () => {
  let component: AlertResetPasswordComponent;
  let fixture: ComponentFixture<AlertResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
