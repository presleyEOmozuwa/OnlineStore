import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameUpdateComponent } from './last-name-update.component';

describe('LastNameUpdateComponent', () => {
  let component: LastNameUpdateComponent;
  let fixture: ComponentFixture<LastNameUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNameUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNameUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
