import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onCreateUser() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);

    this.authService.signup(this.form.value.email, this.form.value.password).subscribe({
      next: result => { console.log(result); },
      error: error => { console.log(error); },
    });



    //   { next : result =>
    //     {
    //       this.msg = "Yeahh!!",
    //       console.log(result);

    //     }
    //  , error => {

    // }});


    // .subscribe(arg => {
    //   this.msg = "Yeahh!!";
    // });
    ;
    ;
  }

}
