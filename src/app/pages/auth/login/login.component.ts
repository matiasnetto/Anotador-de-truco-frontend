import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string | null = null;
  submitted = false;

  form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe((data) => console.log(data));
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (this.form.valid) {
      this.submitted = true;
      this.authService
        .loginUser(this.form.value.username!, this.form.value.password!)
        .subscribe(
          (res) => {
            console.log('Successs', res);
            window.localStorage.setItem('authorization', res.token);
            this.router.navigate(['/']);
          },
          (error) => {
            this.errorMessage = 'Invalid username or password';
          }
        );
    }
  }
}
