import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  username:string;
  password:string;
  constructor( private router: Router, private  sellerservice:SellerService) { }

  ngOnInit(): void {
  }


  login()
  {
    console.log("in login method");
    const loginPayload = {
      username: this.username,
      password: this.password
  }
  
    this.sellerservice.login(loginPayload).subscribe(data => {
    
      if(data.result.token!==null) {
    alert("success");
  
        window.localStorage.setItem('token', data.result.token);
        window.localStorage.setItem('id', data.result.sellerid);
        window.localStorage.setItem('username', data.result.username);
     console.log(data.result.token);
        this.router.navigate(['landing']);
      }else {
       
     alert("incorrect Pasword");
      }
    });
  }

}
