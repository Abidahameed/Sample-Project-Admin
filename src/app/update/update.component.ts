import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productList: any[] = []; // Assume productList is populated elsewhere
  selectedProduct: any = {};
  productId: string = '';
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  updateProduct(updateProductForm: NgForm) {
    
    if (updateProductForm.valid) {
      const productData = updateProductForm.value;
  
      // Call the service method to update the product
      this.product.updateProduct(this.productId, productData).subscribe(
        (response) => {
          console.log('Product updated successfully in the database', response);
  
          // Update the product in the productList
          const index = this.productList.findIndex((p) => p.id === productData.id);
          if (index !== -1) {
            // Update the existing product in the array
            this.productList[index] = { ...this.productList[index], ...productData };
          }
  
          // Clear the form
          updateProductForm.reset();
          this.selectedProduct = {};
        },
        (error) => {
          // Handle the error response
          console.error('Error updating product in the database', error);
  
          // Display an error message to the user
          // You might want to implement a notification service for better user feedback
          // this.notificationService.showError('Failed to update product. Please try again.');
        }
      );
    }
  }
  
  
}
