import { Component } from '@angular/core';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderlist: any[] = [];

  constructor(private product: ProductService) {}


  ngOnInit(): void {
    this.product.getOrders().subscribe(
      (result: any) => {
        console.log('Full API Response:', result);
  
        if (result && result.vieworder) {
          this.orderlist = result.vieworder;
          console.log('Fetched data:', this.orderlist);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
}
