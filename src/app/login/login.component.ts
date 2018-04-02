import { Component, OnInit } from '@angular/core';
import {Login} from '../model/login'
import {LoginService} from '../service/login/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private background_img = '/assets/images/group.png';
  model = new Login("","")
  message = ""

  constructor(
    private loginService: LoginService
  ) { }

  login():void{
    this.loginService.searchLogin(this.model);
  }
  
  ngOnInit(){

  }

}
