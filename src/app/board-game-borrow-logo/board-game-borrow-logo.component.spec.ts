import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGameBorrowLogoComponent } from './board-game-borrow-logo.component';

describe('BoardGameBorrowLogoComponent', () => {
  let component: BoardGameBorrowLogoComponent;
  let fixture: ComponentFixture<BoardGameBorrowLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGameBorrowLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardGameBorrowLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
