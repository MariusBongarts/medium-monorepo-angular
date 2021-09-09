import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationItemsComponent } from './validation-items.component';

describe('ValidationItemsComponent', () => {
  let component: ValidationItemsComponent;
  let fixture: ComponentFixture<ValidationItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
