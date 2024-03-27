import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ToDoListComponent } from './todo/to-do-list/to-do-list.component';
// import { TodoComponent } from './todo/todo.component';
import { ToDoItemComponent } from './todo/to-do-item/to-do-item.component';
import { NoComponent } from './notes/no/no.component';
import { YesComponent } from './notes/yes/yes.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ToDoListComponent,
    // TodoComponent,
    ToDoItemComponent,
    NoComponent,
    YesComponent,
    ProductListComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
