import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SellerService } from '../seller.service';
import { Item } from '../Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private sellerservice:SellerService, private router: Router) { }

  id:number;
  item:Item[];
sellerid:any;

  ngOnInit(): void {

    this.reloaditem();
  }


  reloaditem()
  {
    this.sellerid=window.localStorage.getItem("id");
    this.sellerservice.getall(this.sellerid).subscribe(item=>this.item=item);
  }

  deleteitem(id:number)
  {
    this.sellerservice.deleteitem(id).subscribe(id=>{alert("item is deleted")});
   this.reloaditem();
  }
  
 Update(id:number)
 {
this.router.navigate(['update-item',id])

 }
 Toaddproduct()
 {
   this.router.navigate(['add-item'])
 }
  
}
