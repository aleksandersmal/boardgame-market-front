import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGamesComponent } from './users-games.component';

describe('UsersGamesComponent', () => {
  let component: UsersGamesComponent;
  let fixture: ComponentFixture<UsersGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
