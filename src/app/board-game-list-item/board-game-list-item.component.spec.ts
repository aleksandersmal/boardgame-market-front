import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameListItemComponent } from './board-game-list-item.component';

describe('BoardGameListItemComponent', () => {
  let component: BoardGameListItemComponent;
  let fixture: ComponentFixture<BoardGameListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGameListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
