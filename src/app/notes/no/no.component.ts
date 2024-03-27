import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import todoITem from '../../Types/todoitem';

@Component({
  selector: 'app-no',
  templateUrl: './no.component.html',
  styleUrl: './no.component.css'
})
export class NoComponent {
  @Input() item: todoITem ={
    title:'',
    isDone:false,
  };
  @Output() itemMArkAsDone = new EventEmitter<string>();

  handleClick(e: MouseEvent){
    this.item.isDone = true;
    this.itemMArkAsDone.emit(this.item.title);
  }
}
