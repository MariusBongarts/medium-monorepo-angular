import { Component, Input, OnInit } from '@angular/core';
import { ValidationResult } from '../../../../shared/dist';

@Component({
  selector: 'app-validation-items',
  templateUrl: './validation-items.component.html',
  styleUrls: ['./validation-items.component.css']
})
export class ValidationItemsComponent {
  @Input()
  validationResults!: ValidationResult[];

  constructor() { }

}
