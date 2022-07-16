import { Component, OnInit } from '@angular/core';
import { Seller } from '../Seller';
import { SellerService } from '../seller.service';
import { Item } from '../Item';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor( private dataservice: SellerService,private router:Router) { }

  ngOnInit(): void {
  }

user:User;
sellerid:any;

  item:Item =new Item();


 
  addingItem()
  {
    this.sellerid=window.localStorage.getItem("id");
    console.log("adding button mthod");
    console.log("adding"+this.sellerid);
  
    this.dataservice.addItem(this.sellerid,this.item).subscribe(item=>{alert("item is added.")});
  }
  show()
  {
    this.router.navigate(['productlist'])
  }


  onSubmit()
  {
 this.addingItem();
 
  }
}
