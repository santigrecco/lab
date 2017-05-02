import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  error: Boolean = false;
  public currentError = ''

  constructor(@Inject('UserService') private UserService) { }

  ngOnInit() {
    const result = this.UserService.authentication('manager', 1234);
    console.log(result);
     
  }

  signIn() {
    //
    //  there should be authentication 
    //
    this.error = !this.error
    //depends on the error
    this.currentError = 'Your Globant credentials are wrong. Please try again'; 
    this.currentError = 'Not a member? click <a href="#">here</a> to make a request';

  }

}
