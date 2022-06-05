import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataUpdateComponent } from './personal-data-update.component';

describe('PersonalDataUpdateComponent', () => {
  let component: PersonalDataUpdateComponent;
  let fixture: ComponentFixture<PersonalDataUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
