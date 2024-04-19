import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  submitted = false;
  errorMessage: string | null = null;

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

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.form.controls.username.markAsTouched();
    this.form.controls.fullName.markAsTouched();
    this.form.controls.password.markAsTouched();

    if (this.form.valid) {
      const { username, fullName, password } = this.form.value;
      this.submitted = true;
      this.authService.createNewUser(username!, fullName!, password!).subscribe(
        (res) => {
          window.localStorage.setItem('authorization', res.token);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.errorMessage = 'Username already exists';
        }
      );
    }

    console.log('Username', this.form.controls.username.errors);
    console.log('FullName', this.form.controls.fullName.errors);
    console.log('Password', this.form.controls.password.errors);
  }
}
