import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCredsUpdateComponent } from './login-creds-update.component';

describe('LoginCredsUpdateComponent', () => {
  let component: LoginCredsUpdateComponent;
  let fixture: ComponentFixture<LoginCredsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCredsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCredsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
