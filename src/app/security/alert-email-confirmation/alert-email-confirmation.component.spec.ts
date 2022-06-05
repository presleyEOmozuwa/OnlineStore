import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertEmailConfirmationComponent } from './alert-email-confirmation.component';

describe('AlertEmailConfirmationComponent', () => {
  let component: AlertEmailConfirmationComponent;
  let fixture: ComponentFixture<AlertEmailConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertEmailConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertEmailConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
