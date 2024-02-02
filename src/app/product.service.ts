import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewtableComponent } from './viewtable/viewtable.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
constructor(private http:HttpClient) { }

productList(): Observable<any[]> {
  
  return this.http.get<any[]>('http://localhost:5000/api/products');
}
// deleteProduct(productId:any): Observable<any> {
//   return this.http.delete(`http://localhost:5000/api/products/delete`);
// }

users(): Observable<any[]> {

  return this.http.get<any[]>('http://localhost:5000/api/user/allusers');
}

// addProduct(data:any){
//   return this.http.post<any[]>('http://localhost:5000/api/products/add',data);
  
//   }
  addProduct(data:any): Observable<any[]> {
 
    return this.http.post<any>("http://localhost:5000/api/products/add",data);
  }

  // updateProduct(productData: any): Observable<any> {
  
  //   return this.http.put("http://localhost:5000/api/products/update", productData);
  // }
  
  deleteProduct(productId: string): Observable<any> {
    const url = `http://localhost:5000/api/products/delete?id=${productId}`;
    return this.http.delete<any>(url);
  }
  
  updateProduct(productId: string, updatedData: any): Observable<any> {
    const url = `http://localhost:5000/api/products/update?id=${productId}`;
    return this.http.put<any>(url, updatedData);
  }
  


getOrders(): Observable<any[]> {
return this.http.get<any>(`http://localhost:5000/api/orders/order`);
}

}
