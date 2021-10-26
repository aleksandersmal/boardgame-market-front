import { Component, Input, OnInit } from '@angular/core';
import { LogoSize } from './models/logo-size';

@Component({
  selector: 'app-board-game-borrow-logo',
  templateUrl: './board-game-borrow-logo.component.html',
  styleUrls: ['./board-game-borrow-logo.component.scss']
})
export class BoardGameBorrowLogoComponent implements OnInit {


  @Input()
  public isImage: boolean = false;
  
  @Input()
  public size: LogoSize = LogoSize.SMALL;

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
