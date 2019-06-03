import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersecret;
  ume; password; username;
  constructor(private router: Router) { }
  ngOnInit() {
// this.userDetails = JSON.parse(localStorage.getItem('userdetails') || '[]');
// alert(this.userDetails.length);
  }
  login() {
    if (this.username === 'admin' && this.usersecret === 'admin') {
      this.router.navigateByUrl('');
    } else {
      alert('Invalid Credentials');
    }
}
}
