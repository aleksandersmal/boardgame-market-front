import { Component, Input, OnInit } from '@angular/core';
import { BoardGameItem } from '../models/board-game-item';

@Component({
  selector: 'app-board-game-list-item',
  templateUrl: './board-game-list-item.component.html',
  styleUrls: ['./board-game-list-item.component.scss']
})
export class BoardGameListItemComponent implements OnInit {

  @Input()
  public listItem: BoardGameItem = new BoardGameItem;
  constructor() { }

  ngOnInit(): void {
    console.log(this.listItem)
  }

}
