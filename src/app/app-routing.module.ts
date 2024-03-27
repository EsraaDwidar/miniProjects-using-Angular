import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './game/game.component';
import { YesComponent } from './notes/yes/yes.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ListComponent } from './products/list/list.component';

const routes: Routes = [
  {path : "" , redirectTo : "Home" , pathMatch : "full"},
  {path : "Home" , component : HomeComponent},
  {path : "Count Game" , component : GameComponent},
  {path : "Check items" , component : YesComponent},
  {path : "Products" , component : ListComponent},
  {
    path: 'Products',
    loadChildren: () => import('./products/products.module').then((m)=>m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
