import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {
  productList: any[] = [];
  i: number = 0;
  constructor(private product: ProductService) { }
  // deleteProduct(index: number, productId: number): void {
  //   // Call the service to delete the product in the backend
  //   this.product.deleteProduct(productId).subscribe(
  //     () => {
  //       console.log('Product deleted successfully.');
  //       // Remove the deleted product from the local productList
  //       this.productList.splice(index, 1);
  //     },
  //     (error) => {
  //       console.error('Error deleting product:', error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    
    this.product.productList().subscribe(
      (result: any) => {

        if (result && result.MyData) {
          this.productList = result.MyData;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}