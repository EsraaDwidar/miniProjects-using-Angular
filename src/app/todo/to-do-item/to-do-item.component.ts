import { Component, Input } from '@angular/core';
import todo from '../../Types/todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrl: './to-do-item.component.css'
})
export class ToDoItemComponent {
  // item: todo = new todo();
  @Input() item: todo = new todo();
}
