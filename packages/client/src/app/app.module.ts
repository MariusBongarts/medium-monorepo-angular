import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ValidationItemsComponent } from './validation-items/validation-items.component';
import { ValidationIconComponent } from './validation-icon/validation-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    LoadingSpinnerComponent,
    FormFieldComponent,
    ValidationItemsComponent,
    ValidationIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
