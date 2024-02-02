import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';



const routes:Routes = [


  {path:'',component:NavbarComponent },
  {path:'addproduct',component:AddproductComponent},
  {path:'viewtable',component:ViewtableComponent },
  {path:'orders',component:OrdersComponent },
  {path:'users',component:UsersComponent },
  {path:'delete',component:DeleteComponent },
  {path:'update',component:UpdateComponent },
  { path: 'product-list', component: DeleteComponent },
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewtableComponent,
    AddproductComponent,
    OrdersComponent,
    UsersComponent,
 
    DeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
 
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


