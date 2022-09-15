import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoPageFundComponent } from './no-page-fund/no-page-fund.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductListComponent },
  { path:'form',component:ProductFormComponent},
  { path:'form/:id',component:ProductFormComponent},
  { path: 'product-detail/:id', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NoPageFundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
