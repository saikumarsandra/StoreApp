import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,public auth:AuthenticationService) { }

  ngOnInit(): void {

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
   this.router.navigate(['/loginform']);
  }

}
