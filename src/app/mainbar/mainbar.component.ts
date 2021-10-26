import { Component, OnInit } from '@angular/core';
import { LogoSize } from '../board-game-borrow-logo/models/logo-size';

@Component({
  selector: 'app-mainbar',
  templateUrl: './mainbar.component.html',
  styleUrls: ['./mainbar.component.scss']
})
export class MainbarComponent implements OnInit {

  public logoSize: LogoSize = LogoSize.BIG;
  constructor() { }

  ngOnInit(): void {
  }

}
