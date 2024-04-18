import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  submitted = false;

  public form = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^\S*$/),
    ]),
    fullName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onSubmit(e: Event) {
    e.preventDefault();
    this.form.controls.username.markAsTouched();
    this.form.controls.fullName.markAsTouched();
    this.form.controls.password.markAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
      this.submitted = true;
      //TODO Send data to backend
    }

    console.log('Username', this.form.controls.username.errors);
    console.log('FullName', this.form.controls.fullName.errors);
    console.log('Password', this.form.controls.password.errors);
  }
}
