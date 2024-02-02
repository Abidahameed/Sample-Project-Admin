import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productList: any[] = [];
plist=[];
  constructor(private product: ProductService) { }
  deleteProduct(index: number): void {
    const productId = this.productList[index]._id;
  
    // Call deleteProduct with the productId
    this.product.deleteProduct(productId).subscribe(
      (response) => {
        if (response && response.MyData) {
          const deletedProduct = response.MyData;
          console.log('Product deleted successfully from the backend', deletedProduct);
  
          // Remove the item from the frontend
          this.productList.splice(index, 1);
        } else {
          console.warn('No product found in the backend response');
        }
      },
      (error) => {
        console.error('Error deleting product from the backend:', error);
        // If there is an error, you may want to handle it as needed.
      }
    );
  }
  
  
  
  
  
  ngOnInit(): void {
    this.product.productList().subscribe(
      (result: any) => {
        if (result) {
          this.productList = result.MyData;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}