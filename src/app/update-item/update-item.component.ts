import { Component, OnInit } from '@angular/core';
import { Item,Product } from '../Item';
import { SellerService } from '../seller.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  constructor(private dataserv:SellerService,private router:Router,private route: ActivatedRoute) { }

  item:Product =new Product();
  item1:Item[];
itemid:number;

id:number;
 
  
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.dataserv.getitembyid(this.id).subscribe(item=>{
      console.log(item)
      this.item=item;
    }, error => console.log(error));
     
    console.log("at update ngoninit");
  }

  Update(id:number,item:Product)
  {
    console.log("update");
    console.log(id);
    console.log(item);
    console.log("at update()");
   // product.itemid=this.itemid;

    this.dataserv.updateItem(id,item).subscribe(data=>this.item=data,error => console.log(error));
  }
  onSubmit() {
    this.Update(this.id,this.item);

 this.gotoList();  
  }

  gotoList() {
    this.router.navigate(['productlist']);
  }

}
