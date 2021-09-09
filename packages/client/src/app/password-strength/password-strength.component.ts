import { Component } from '@angular/core';
import {
  allRulesAreValid,
  validatePassword,
  ValidationResult
} from "@mariusbongarts/medium-monorepo-shared";
import { passwordService } from 'src/services/password-service';

const ANIMATION_TIMEOUT_MILLIS = 700;

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  public serverValidationResults!: ValidationResult[]; 
  public loading = false;
  public password = '';
  public isLocked = false;
  public validationResults = validatePassword(this.password);

  constructor() { }

  public async submitPassword()  {
    console.log("submit")
    this.loading = true;
    const validationResults = await passwordService.checkPassword(this.password)
    // Add a timeout for some loading animation
    setTimeout(() => {
      this.loading = false;
      this.serverValidationResults = validationResults;
    }, ANIMATION_TIMEOUT_MILLIS);

  };

  public handleChange(value: string) {
    this.password = value;
    this.validationResults = validatePassword(this.password);
    this.isLocked = allRulesAreValid(this.validationResults);
  }

}
