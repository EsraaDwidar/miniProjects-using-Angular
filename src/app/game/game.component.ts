import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  counter = 0;
  startTime = 0;
  endTime = 0;
  message = '';
  isSlow = false;
  playerName = '';
  handleClick(e: MouseEvent){
    if(this.counter === 0)
    {
      this.startTime = new Date().getTime();
    }
    this.counter++;
    if(this.counter === 10)
    {
      this.endTime = new Date().getTime();
      const duration = this.endTime - this.startTime;
      this.message = `Greate job, ${this.playerName} . you finished in ${duration} milliseconds!`;
      this.isSlow = duration > 2000;
    
    }
  }
  handleInput(e: Event){
    this.playerName = (e.target as HTMLInputElement).value;
  }
}
