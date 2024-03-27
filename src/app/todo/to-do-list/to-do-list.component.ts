import { Component } from '@angular/core';
import todo from '../../Types/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  items:todo[] = [];
  currentItem:string ='';

  handleInput(e: Event){
    this.currentItem =(e.target as HTMLInputElement).value;
  }
  handleClick(e: MouseEvent){
    let newItem:todo ={
      id: this.items.length+1,
      title: this.currentItem,
      isDone: false,
    };
    this.items.push(newItem);
    this.currentItem='';
  }
}
