import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  messageClass;
  message;
  processing = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  disableForm() {
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }


  enableForm() {
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }


  onLoginSubmit() {
    this.processing = true;
    this.disableForm();

    const user = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }


    this.authService.login(user).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'danger center-align';
        this.message = data.message;
        this.processing = false;
        this.enableForm();
      } else {
        this.messageClass = 'success center-align';
        this.message = data.message;
        this.authService.storeUserData(data.token, data.user);

        setTimeout(() => {
          this.router.navigate(['/go']);
        }, 2000);
      }
    });
  }

  ngOnInit() {
  }

}
