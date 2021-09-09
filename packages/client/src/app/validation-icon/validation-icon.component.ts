import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-icon',
  templateUrl: './validation-icon.component.html',
  styleUrls: ['./validation-icon.component.css']
})
export class ValidationIconComponent implements OnInit {
  @Input()
  isDone = false;

  constructor() { }

  ngOnInit(): void {
  }

}
