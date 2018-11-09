import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  error: boolean = false;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        params.auth == "0" ? this.error = true : this.error = false;
      })
  }

  onLogin(form: NgForm) {
    const { email, password } = form.value;

  }

}
