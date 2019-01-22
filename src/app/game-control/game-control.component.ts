import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ message: string }>();
  @Output() gameEnded = new EventEmitter<{ message: string }>();
  @Output() gameReset = new EventEmitter<{ message: string}>();

  constructor() { }

  ngOnInit() {
    
  }

  onGameStart() {
    this.gameStarted.emit({ message: 'game started' });
  }

  onGameEnd() {
    this.gameEnded.emit({ message: 'game ended' });
  }

  onGameReset() {
    this.gameReset.emit({ message: 'game reset' });
  }
}