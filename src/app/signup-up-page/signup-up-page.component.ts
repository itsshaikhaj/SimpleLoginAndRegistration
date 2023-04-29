import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    else {
      {
        this.http.post<any>("http://localhost:3000/signupUsersList",this.registerForm.value)
    .subscribe(res=>{
      this.registerForm.reset();
      this._snackBar.open('Register Successfully!', 'Success', {
        duration: 2000,
      });
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
        this._snackBar.open('Something went wrong', 'Error', {
          duration: 2000,
        });
        this.router.navigate(['/login']);
      }
    }
  }

}
