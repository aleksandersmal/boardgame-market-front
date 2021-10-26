import { Component, OnInit } from '@angular/core';
import boardGames from '../json-dummmy-files/game-list.json';
import { BoardGameItem } from '../models/board-game-item';

@Component({
  selector: 'app-board-game-list',
  templateUrl: './board-game-list.component.html',
  styleUrls: ['./board-game-list.component.scss']
})
export class BoardGameListComponent implements OnInit {

  public boardGameList:BoardGameItem[] = boardGames;

  constructor() { }

  ngOnInit(): void {
  }

}
