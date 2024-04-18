import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

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

  constructor() {
    this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe((data) => console.log(data));
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    this.submitted = true;
    if (this.form.valid) {
      //TODO Add the request to LOGIN
      this.errorMessage = 'Invalid username or password';
    }
  }

  print(e: InputEvent) {}
}
