import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private product: ProductService) { }
  ngOnInit(): void {

   
    this.product.users().subscribe(
      (result: any) => {
        if (result) {
          this.users = result.MyData;
          console.log('Fetched data:', this.users);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
