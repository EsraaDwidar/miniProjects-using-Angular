import { Component } from '@angular/core';
import todoITem from '../../Types/todoitem';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import todo from '../../Types/todo';

@Component({
  selector: 'app-yes',
  templateUrl: './yes.component.html',
  styleUrl: './yes.component.css'
})
export class YesComponent {
  todoItems: todoITem[] = [
    {
      title: 'item 1',
      isDone: false,
    },
    {
      title: 'item 2',
      isDone: true,
    }
  ];
  form = new FormGroup({
    title: new FormControl<string>('',[Validators.required]),
    isDone: new FormControl<boolean>(false,[]),
  });

  handleAddItem(e: MouseEvent){
    e.preventDefault();
    if(this.form.invalid) return;
    
    this.todoItems.push({
      title: this.form.value.title!,
      isDone: this.form.value.isDone ?? false,
    });
    this.form.reset();
  }
  handleItemMArkAsDone(title: string){
    const countOfDoneItems = this.todoItems.filter(i =>i.isDone).length;
    const totalItems = this.todoItems.length;
    alert(`Good job for finishing ${title},u have done ${countOfDoneItems} out of ${totalItems} items!`);
  }
}
