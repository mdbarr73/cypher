import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'md-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public gridSizes: number[] = [4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit() {
  }

}
