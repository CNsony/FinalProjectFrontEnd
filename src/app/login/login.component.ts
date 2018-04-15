import { Component, OnInit } from '@angular/core';
import {Login} from '../model/login'
import {LoginService} from '../service/login/login.service'
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
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
    private loginService: LoginService,
    private router: Router
  ) { }

  login():void{
    
    if(this.loginService.searchLogin(this.model)){
      
      this.router.navigate(['/dashboard'])
    };
  }
  
  ngOnInit(){
    if(Cookie.get("login")!==null){
      this.router.navigate(['/dashboard'])
    }
  }

}
