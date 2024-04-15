import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  constructor() {
    this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe((data) => console.log(data));
  }

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log(this.form.value);
  }
}
