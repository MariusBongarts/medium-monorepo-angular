import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {
  @Input()
  isLocked!: boolean;

  @Output()
  inputChanged = new EventEmitter<string>();

  constructor() { }

  public handleChange(event: Event) {
    this.inputChanged.emit((<HTMLInputElement>event.target).value.trim());
  }

}
