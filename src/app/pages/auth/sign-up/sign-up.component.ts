import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public form = new FormGroup({
    'username': new FormControl<string>(""),
    'fullName': new FormControl<string>(""),
    'password': new FormControl<string>("")
  })

}
