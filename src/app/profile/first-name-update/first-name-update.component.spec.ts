import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameUpdateComponent } from './first-name-update.component';

describe('FirstNameUpdateComponent', () => {
  let component: FirstNameUpdateComponent;
  let fixture: ComponentFixture<FirstNameUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNameUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNameUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
