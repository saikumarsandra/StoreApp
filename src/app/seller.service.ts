import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from './Seller';
import { Observable } from 'rxjs';
import { Item, Product } from './Item';
import { ApiResponse } from './model/api.response';

@Injectable({
  providedIn: 'root'
})
export class SellerService {


 
  private baseUrl='http://localhost:8917/api/addseller'
  private baseUrl1='http://localhost:8917/itemapi/additem'

  constructor(private http:HttpClient) { }


  

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8917/' + 'token/generate-token', loginPayload);
  }

  createSeller(seller:Seller):Observable<any>
  {
    return this.http.post(`${this.baseUrl}`,seller);
  }


   addItem(id:number,item:Item):Observable<any>
   {
     return this.http.post(`${this.baseUrl1}/${id}`,item);
   }

   getall(id:number):Observable<any>
  {
   return this.http.get(`http://localhost:8917/itemapi/item/getall/${id}`)
  }
 
   updateItem(itemid:number,item1:Product):Observable<any>
   {
     console.log("servermet"+itemid); 
     console.log("server"+item1.manufacturer)
     return this.http.put(`http://localhost:8917/itemapi/update/${itemid}`,item1);

   }
   deleteitem(id:number):Observable<any>
   {
 return this.http.delete(`http://localhost:8917/itemapi/deleteitem/${id}`);
   }
   getitembyid(id:number) :Observable<any>
  {
    return this.http.get(`http://localhost:8917/itemapi/item/${id}`)

  }
}
