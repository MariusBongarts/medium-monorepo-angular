import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationIconComponent } from './validation-icon.component';

describe('ValidationIconComponent', () => {
  let component: ValidationIconComponent;
  let fixture: ComponentFixture<ValidationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
