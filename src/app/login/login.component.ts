'use strict';
import { Component} from '@angular/core';
import {Router} from '@angular/router'


@Component({
  
  selector: 'app-login',
  templateUrl: "login.component.html",
  styleUrls: ['login.component.css']

})
export class LoginComponent {


  constructor(private _router: Router) {

  }




  login() {
    this._router.navigate(['dashboard', 'home']);
  }


}
