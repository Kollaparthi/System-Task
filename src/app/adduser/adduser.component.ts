import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  username; name; email; password; cnfmpassword; mblno; address;  userDetails = []; date;
  signupForm: FormGroup; registerForm: FormGroup;  submitted = false; description ; Name;
  Country; City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan', 'New York'];
  constructor( private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    localStorage.clear();
    this.registerForm = this.formBuilder.group({
     Name: ['', Validators.required],
      date: ['', Validators.required],
      Country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobilenumber: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      address: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(30)]]
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    // alert('hello');

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.userDetails.push({
      Name :  this.Name,
      Email : this.email,
      Password : this.password,
      Mblno : this.mblno,
      City : this.address,
      Country : this.Country,
      Date: this.date,
      description: this.description
    });
        localStorage.setItem('userdetails', JSON.stringify(this.userDetails));

        alert('Successfully registered');
        this.router.navigateByUrl('tablelist');

        this.registerForm.reset();
        // $('#username').val(null);
        // $('#Name').val(null);
        // $('#email').val(null);
        // $('#password').val(null);
        // $('#confirmpassword').val(null);
        // $('#mobilenumber').val(null);
        // $('#address').val(null);
    }
}
