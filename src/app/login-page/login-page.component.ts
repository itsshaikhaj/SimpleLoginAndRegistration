import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,  private _snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {
    console.log('this.loginForm :', this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }  else {
      this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        this._snackBar.open('Logged in Successfully!', 'Success', {
          duration: 2000,
        });
        this.loginForm.reset()
      this.router.navigate(["home"])
      }else{
        this._snackBar.open('User not found!', 'Success', {
          duration: 2000,
        });
      }
    },err=>{
      this._snackBar.open('Something went wrong!', 'Error', {
        duration: 2000,
      });
    })
    }
  }
}
