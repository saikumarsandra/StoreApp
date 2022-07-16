import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Seller } from '../Seller';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private sellerservice:SellerService, private router:Router) { }
seller:Seller =new Seller();

  ngOnInit(): void {
  }


  addSeller()
  {
    this.sellerservice.createSeller(this.seller).subscribe(seller=>{alert("your  successfully singup .")
  
    this.gotlogin()
                       },
    seller=>console.log(seller))
   
  }



  onSubmit()
  {
    this.addSeller();
    
    
  }
  gotlogin()
  {
this.router.navigate(['loginform']);
  }

}
