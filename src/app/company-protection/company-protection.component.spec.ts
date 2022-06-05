import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProtectionComponent } from './company-protection.component';

describe('CompanyProtectionComponent', () => {
  let component: CompanyProtectionComponent;
  let fixture: ComponentFixture<CompanyProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProtectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
