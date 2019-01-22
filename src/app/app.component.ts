import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gameRounds = [];
  num = 0;
  ref;

  ngOnInit() {

  }

  onGameStarted() : void {
    this.ref = setInterval(() => {
      this.num++;
      console.log(this.num);
      this.gameRounds.push(this.num)
    }, 1000);
  }

  onGameEnded() : void {
    this.ref = clearInterval(this.ref);
  }

  onGameReset() {
    this.gameRounds = [];
    this.num = 0;
    this.ref = clearInterval(this.ref);
  }
}